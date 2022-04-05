CREATE TABLE IF NOT EXISTS accounts(
  id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  name varchar(255) COMMENT 'User Name',
  email varchar(255) COMMENT 'User Email',
  picture varchar(255) COMMENT 'User Picture'
) default charset utf8 COMMENT '';

ALTER TABLE accounts ADD COLUMN password VARCHAR(255) NOT NULL;
ALTER TABLE accounts ADD COLUMN title VARCHAR(255);
ALTER TABLE accounts ADD COLUMN employee TINYINT;

INSERT INTO accounts(id, email, name, password, picture)
VALUES("he4hux8jt5lu9qpn","phillip.webb@horizonstudios.com", "Phillip Webb", "_;tE2{Tkk8P5M+7@", "https://randomuser.me/api/portraits/men/6.jpg");

INSERT INTO accounts(id, email, name, password, picture)
VALUES("dwq3nfn0sao97yei","josephine.holland@horizonstudios.com", "Josephine Holland", ".;tE2{Tkk8P5M+7@", "https://randomuser.me/api/portraits/women/63.jpg");

INSERT INTO accounts(id, email, name, password, picture)
VALUES("mlg6exjtsbwm7lxq","jonathan.lampel@horizonstudios.com", "Jonathan Lampel", "l;tE2{Tkk8P5M+7@", "https://randomuser.me/api/portraits/men/61.jpg");

INSERT INTO accounts(id, email, name, password, picture)
VALUES("5pef7a0v354kq05p","jessie.doyle@horizonstudios.com", "Jessie Doyle", "chocolate", "https://randomuser.me/api/portraits/women/32.jpg");

INSERT INTO accounts(id, email, name, password, picture)
VALUES("54maaw7jawifxh2g","harvey.thompson@horizonstudios.com", "Harvey Thompson", "k;tE2{Tkk8P5M+7@", "https://randomuser.me/api/portraits/men/4.jpg");

INSERT INTO accounts(id, email, name, password, picture)
VALUES("11635aazkr85z5k0","sheila.torres@horizonstudios.com", "Sheila Torres", "m;tE2{Tkk8P5M+7@", "https://randomuser.me/api/portraits/women/1.jpg");


CREATE TABLE IF NOT EXISTS products(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name VARCHAR(255) NOT NULL,
  price decimal NOT NULL,
  sku VARCHAR(255) NOT NULL,
  description VARCHAR(255)
) default charset utf8 COMMENT '';

ALTER TABLE products ADD COLUMN img VARCHAR(255);
ALTER TABLE products ADD COLUMN quantity INT;

INSERT INTO products(name, price, sku, description, img)
VALUES("MeeMas Paddle", 24.99, "|-O-|", "A boat paddle signed by MeeMa Herself!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRXaikFlEABquBVOPvUIWVaQAeK0rwe4o4w&usqp=CAU");
INSERT INTO products(name, price, sku, description, img)
VALUES("Rivers Edge Plushie", 15.99, "kitten-soft", "The perfect midnight snuggle companion", "https://i.pinimg.com/736x/7f/3e/08/7f3e080d5926529a0d8e7fc2d84971d9.jpg");
INSERT INTO products(name, price, sku, description, img)
VALUES("Rivers Guide Tee", 12.99, "port-r", "Lost", "https://rlv.zcache.com/i_lost_my_liver_on_the_river_t_shirt-rdaef7509acf2447d8285359e3a27c8c6_k2g9y_704.webp");
INSERT INTO products(name, price, sku, description, img)
VALUES("Breakdown Saw", 50.99, "scal", "NO SPOLIERS!!!", "https://res2.grays.com/handlers/imagehandler.ashx?t=sh&id=20204713&s=fl&index=0&ts=636862709020000000");