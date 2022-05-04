CREATE DATABASE stickman_attack_db;

use stickman_attack_db;

CREATE TABLE users (
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
  score int(5) UNSIGNED DEFAULT 0,
  money int(10) UNSIGNED DEFAULT 0
);

CREATE TABLE enemies (
  id int(6) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) UNIQUE NOT NULL,
  health int(5) NOT NULL DEFAULT 100,
  damage int(5) NOT NULL DEFAULT 5,
  attack_speed DECIMAL(2, 2) NOT NULL DEFAULT (01.00),
  run_gif_url VARCHAR(255),
  attack_gif_url VARCHAR(255),
  money_given int(10) UNSIGNED DEFAULT 0
);

CREATE TABLE weapons (
  id int(6) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  damage int(5) UNSIGNED DEFAULT 10,
  attack_speed DECIMAL(2, 2) NOT NULL DEFAULT (01.00),
  bullets int(4) UNSIGNED DEFAULT 10,
  value int(10) NOT NULL,
  image VARCHAR(255)
);