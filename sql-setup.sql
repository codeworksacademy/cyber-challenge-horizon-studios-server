CREATE TABLE IF NOT EXISTS accounts(
  id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  name varchar(255) COMMENT 'User Name',
  email varchar(255) COMMENT 'User Email',
  picture varchar(255) COMMENT 'User Picture'
) default charset utf8 COMMENT '';

ALTER TABLE accounts ADD COLUMN password VARCHAR(255) NOT NULL;

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

INSERT INTO products(name, price, sku, description, img)
VALUES("MeeMas Paddle", 24.99, "|-O-|", "A boat paddle signed by MeeMa Herself!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRXaikFlEABquBVOPvUIWVaQAeK0rwe4o4w&usqp=CAU");
INSERT INTO products(name, price, sku, description, img)
VALUES("Rivers Edge Plushie", 15.99, "kitten-soft", "The perfect midnight snuggle companion", "https://i.pinimg.com/736x/7f/3e/08/7f3e080d5926529a0d8e7fc2d84971d9.jpg");
INSERT INTO products(name, price, sku, description, img)
VALUES("Rivers Guide Tee", 12.99, "port-r", "Lost", "https://rlv.zcache.com/i_lost_my_liver_on_the_river_t_shirt-rdaef7509acf2447d8285359e3a27c8c6_k2g9y_704.webp");
INSERT INTO products(name, price, sku, description, img)
VALUES("Breakdown Saw", 50.99, "scal", "NO SPOLIERS!!!", "https://res2.grays.com/handlers/imagehandler.ashx?t=sh&id=20204713&s=fl&index=0&ts=636862709020000000");