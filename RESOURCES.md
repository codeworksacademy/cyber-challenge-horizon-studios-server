**MySQL Setup with NGINX Proxy**
---------------------------------------------------------

**Install MySQL server:**

```terminal
> sudo apt get install mysql
```

**Configure MySQL server:**

```terminal
> sudo mysql
mysql> CREATE DATABASE horizon_studios;
```

Add MySQL User and be sure to change username and password. `Keep the single quotes in place`

```sql
mysql> CREATE USER 'USERNAME'@'localhost' IDENTIFIED BY 'PASSWORD';
```

Set and Flush permissions

```sql
GRANT ALL PRIVILEGES ON *.* TO 'USERNAME'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
exit
```

**Change port for MySQL server to allow `nginx proxy` :**

Go to config file of mysql server:

> `sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf`

```
#change socket port for client :
port = 3306 to 3308
#change bind address :
bind address = 127.0.0.1 to 0.0.0.0
```

**Setup nginx proxy:**

```terminal
> sudo nano /etc/nginx/nginx.conf
```

Add the following section to proxy 3306 -> 3308

```nginx
stream {
  upstream db {
    server localhost:3308;
  }

  server {
    listen 3306;
    proxy_pass db;
  }
}
```

**Restart Services:**

```terminal
> sudo systemctl stop mysql.service
> sudo systemctl start mysql.service
> sudo systemctl restart nginx
```

**Test Connection:**

Connect to your MySQL Server using the public `IP` address of the machine on port `3306` and the username and password for the user you created above

> run sql-setup.sql
