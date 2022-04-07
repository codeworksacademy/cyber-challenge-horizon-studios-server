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
INSERT INTO
  accounts(id, email, name, password, picture)
VALUES(
    "he4hux8jt5lu9qpn",
    "phillip.webb@horizonstudios.com",
    "Phillip Webb",
    "_;tE2{Tkk8P5M+7@",
    "https://minimaltoolkit.com/images/randomdata/male/1.jpg"
  );
INSERT INTO
  accounts(
    id,
    email,
    name,
    password,
    picture,
    employee,
    title
  )
VALUES(
    "dwq3nfn0sao97yei",
    "josephine.holland@horizonstudios.com",
    "Josephine Holland",
    ".;tE2{Tkk8P5M+7@",
    "https://minimaltoolkit.com/images/randomdata/female/1.jpg",
    1,
    "CEO"
  );
INSERT INTO
  accounts(
    id,
    email,
    name,
    password,
    picture,
    employee,
    title
  )
VALUES(
    "mlg6exjtsbwm7lxq",
    "jonathan.lampel@horizonstudios.com",
    "Jonathan Lampel",
    "l;tE2{Tkk8P5M+7@",
    "https://minimaltoolkit.com/images/randomdata/male/2.jpg",
    1,
    "CFO"
  );
INSERT INTO
  accounts(
    id,
    email,
    name,
    password,
    picture,
    employee,
    title
  )
VALUES(
    "5pef7a0v354kq05p",
    "jessie.doyle@horizonstudios.com",
    "Jessie Doyle",
    "chocolate",
    "https://minimaltoolkit.com/images/randomdata/female/7.jpg",
    1,
    "Marketing Lead"
  );
INSERT INTO
  accounts(
    id,
    email,
    name,
    password,
    picture,
    employee,
    title
  )
VALUES(
    "54maaw7jawifxh2g",
    "harvey.thompson@horizonstudios.com",
    "Harvey Thompson",
    "k;tE2{Tkk8P5M+7@",
    "https://minimaltoolkit.com/images/randomdata/male/3.jpg",
    1,
    "Game Developer"
  );
INSERT INTO
  accounts(
    id,
    email,
    name,
    password,
    picture,
    employee,
    title
  )
VALUES(
    "11635aazkr85z5k0",
    "sheila.torres@horizonstudios.com",
    "Sheila Torres",
    "m;tE2{Tkk8P5M+7@",
    "https://minimaltoolkit.com/images/randomdata/female/5.jpg",
    1,
    "Digital Artist"
  );
CREATE TABLE IF NOT EXISTS products(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    price decimal(8, 2) NOT NULL,
    sku VARCHAR(255) NOT NULL,
    quantity INT,
    description VARCHAR(255)
  ) default charset utf8 COMMENT '';
CREATE TABLE IF NOT EXISTS messages(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    senderId VARCHAR(255) NOT NULL,
    toId VARCHAR(255) NOT NULL,
    body VARCHAR(255),
    FOREIGN KEY(toId) REFERENCES accounts(id) ON DELETE CASCADE,
    FOREIGN KEY(senderId) REFERENCES accounts(id) ON DELETE CASCADE
  ) default charset utf8 COMMENT '';
-- MESSAGES
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "11635aazkr85z5k0",
    "Welcome to Horizon Studios, You are going to be a great addition to the team!"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "11635aazkr85z5k0",
    "5pef7a0v354kq05p",
    "Thanks, I am nervous and excited!"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "54maaw7jawifxh2g",
    "Have you had a chance to review the TPS reports?"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "54maaw7jawifxh2g",
    "5pef7a0v354kq05p",
    "Did you send them to me?"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "54maaw7jawifxh2g",
    "5pef7a0v354kq05p",
    "I Don't remember seeing them"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "54maaw7jawifxh2g",
    "Oh, I thought so, Let me check..."
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "5pef7a0v354kq05p",
    "https://youtu.be/8FkiOfEgyvM"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "5pef7a0v354kq05p",
    "https://tinyurl.com/2p9y2w8z"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "5pef7a0v354kq05p",
    "https://github.com/Anteste/WebMap"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "dwq3nfn0sao97yei",
    "Can you look over these proofs... I feel like something is missing"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "dwq3nfn0sao97yei",
    "https://tinyurl.com/2p95h4n7"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "he4hux8jt5lu9qpn",
    "Did you ever get logged into the server?"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "he4hux8jt5lu9qpn",
    "5pef7a0v354kq05p",
    "No, I can remember the password its easy but can you remind me the username I think it was something strange"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "he4hux8jt5lu9qpn",
    "5pef7a0v354kq05p",
    "also if I want to upload these files is this the way I have to do it? It would be nice to have some better way of changing the site details."
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "5pef7a0v354kq05p",
    "he4hux8jt5lu9qpn",
    "Yeah, I know it is a pain, for now you can only login this way. The username is `meemaw` Let me know if you need help."
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "he4hux8jt5lu9qpn",
    "5pef7a0v354kq05p",
    "Awesome thanks, That got me in, After I upload the files do I have to do anything else to make them show up?"
  );
INSERT INTO
  messages(toId, senderId, body)
VALUES(
    "he4hux8jt5lu9qpn",
    "5pef7a0v354kq05p",
    "Nevermind it looks like it is working"
  );

SELECT m.*, a.name, a.picture FROM messages m JOIN accounts a ON a.id = m.senderId LIMIT 100;


--PRODUCTS
INSERT INTO
  products(name, price, sku, description, img, quantity)
VALUES(
    "MeeMas Paddle",
    24.99,
    "|-O-|",
    "A boat paddle signed by MeeMa Herself!",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRXaikFlEABquBVOPvUIWVaQAeK0rwe4o4w&usqp=CAU",
    35
  );
INSERT INTO
  products(name, price, sku, description, img, quantity)
VALUES(
    "Rivers Edge Plushie",
    15.99,
    "kitten-soft",
    "The perfect midnight snuggle companion",
    "https://i.pinimg.com/736x/7f/3e/08/7f3e080d5926529a0d8e7fc2d84971d9.jpg",
    45
  );
INSERT INTO
  products(name, price, sku, description, img, quantity)
VALUES(
    "Rivers Guide Tee",
    12.99,
    "port-r",
    "Lost",
    "https://rlv.zcache.com/i_lost_my_liver_on_the_river_t_shirt-rdaef7509acf2447d8285359e3a27c8c6_k2g9y_704.webp",
    220
  );
INSERT INTO
  products(name, price, sku, description, img, quantity)
VALUES(
    "Breakdown Saw",
    50.99,
    "scal",
    "NO SPOLIERS!!!",
    "https://res2.grays.com/handlers/imagehandler.ashx?t=sh&id=20204713&s=fl&index=0&ts=636862709020000000",
    5
  );
INSERT INTO
  products(name, price, sku, description, img, quantity)
VALUES(
    "Secret Product",
    99.99,
    "CW-{SQL-FUN-TIME}",
    "This is a flag",
    "https://codeworks.blob.core.windows.net/public/assets/img/cyber/logos/ctf.png",
    0
  );