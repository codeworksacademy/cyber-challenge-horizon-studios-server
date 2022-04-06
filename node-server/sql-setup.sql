CREATE TABLE IF NOT EXISTS accounts(
  id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  name varchar(255) COMMENT 'User Name',
  email varchar(255) NOT NULL UNIQUE COMMENT 'User Email',
  password VARCHAR(255) NOT NULL COMMENT 'INTENTIONALLY BAD',
  picture varchar(255) COMMENT 'User Picture',
  title varchar(255) COMMENT 'Employee Title',
  employee TINYINT
) default charset utf8 COMMENT '';

INSERT INTO accounts(id, email, name, password, picture)
VALUES("he4hux8jt5lu9qpn","phillip.webb@horizonstudios.com", "Phillip Webb", "_;tE2{Tkk8P5M+7@", "https://minimaltoolkit.com/images/randomdata/male/1.jpg");

INSERT INTO accounts(id, email, name, password, picture, employee, title)
VALUES("dwq3nfn0sao97yei","josephine.holland@horizonstudios.com", "Josephine Holland", ".;tE2{Tkk8P5M+7@", "https://minimaltoolkit.com/images/randomdata/female/1.jpg", 1, "CEO");

INSERT INTO accounts(id, email, name, password, picture, employee, title)
VALUES("mlg6exjtsbwm7lxq","jonathan.lampel@horizonstudios.com", "Jonathan Lampel", "l;tE2{Tkk8P5M+7@", "https://minimaltoolkit.com/images/randomdata/male/2.jpg", 1, "CFO");

INSERT INTO accounts(id, email, name, password, picture, employee, title)
VALUES("5pef7a0v354kq05p","jessie.doyle@horizonstudios.com", "Jessie Doyle", "chocolate", "https://minimaltoolkit.com/images/randomdata/female/7.jpg", 1, "Marketing Lead");

INSERT INTO accounts(id, email, name, password, picture, employee, title)
VALUES("54maaw7jawifxh2g","harvey.thompson@horizonstudios.com", "Harvey Thompson", "k;tE2{Tkk8P5M+7@", "https://minimaltoolkit.com/images/randomdata/male/3.jpg", 1, "Game Developer");

INSERT INTO accounts(id, email, name, password, picture, employee, title)
VALUES("11635aazkr85z5k0","sheila.torres@horizonstudios.com", "Sheila Torres", "m;tE2{Tkk8P5M+7@", "https://minimaltoolkit.com/images/randomdata/female/5.jpg", 1, "Digital Artist");


CREATE TABLE IF NOT EXISTS products(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name VARCHAR(255) NOT NULL,
  img VARCHAR(255),
  price decimal(8,2) NOT NULL,
  sku VARCHAR(255) NOT NULL,
  quantity INT,
  description VARCHAR(255)
) default charset utf8 COMMENT '';

INSERT INTO products(name, price, sku, description, img, quantity)
VALUES("MeeMas Paddle", 24.99, "|-O-|", "A boat paddle signed by MeeMa Herself!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRXaikFlEABquBVOPvUIWVaQAeK0rwe4o4w&usqp=CAU", 35);
INSERT INTO products(name, price, sku, description, img, quantity)
VALUES("Rivers Edge Plushie", 15.99, "kitten-soft", "The perfect midnight snuggle companion", "https://i.pinimg.com/736x/7f/3e/08/7f3e080d5926529a0d8e7fc2d84971d9.jpg", 45);
INSERT INTO products(name, price, sku, description, img, quantity)
VALUES("Rivers Guide Tee", 12.99, "port-r", "Lost", "https://rlv.zcache.com/i_lost_my_liver_on_the_river_t_shirt-rdaef7509acf2447d8285359e3a27c8c6_k2g9y_704.webp", 220);
INSERT INTO products(name, price, sku, description, img, quantity)
VALUES("Breakdown Saw", 50.99, "scal", "NO SPOLIERS!!!", "https://res2.grays.com/handlers/imagehandler.ashx?t=sh&id=20204713&s=fl&index=0&ts=636862709020000000", 5);
INSERT INTO products(name, price, sku, description, img, quantity)
VALUES("Secret Product", 99.99, "CW-{SQL-FUN-TIME}", "This is a flag", "https://codeworks.blob.core.windows.net/public/assets/img/cyber/logos/ctf.png", 0);
