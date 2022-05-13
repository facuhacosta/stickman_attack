CREATE DATABASE stickman_attack_db;

\c stickman_attack_db;

CREATE TABLE IF NOT EXISTS "USERS"
(
  user_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
  username character varying(10) COLLATE pg_catalog."default" NOT NULL,
  password text COLLATE pg_catalog."default" NOT NULL,
  money integer DEFAULT 0,
  max_waves smallint DEFAULT 0,
  is_admin boolean DEFAULT false,
  CONSTRAINT "USERS_pkey" PRIMARY KEY (user_id),
  CONSTRAINT username UNIQUE (username)
    INCLUDE(username)
)

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

CREATE TABLE IF NOT EXISTS "WEAPONS"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 0 MINVALUE 0 MAXVALUE 2147483647 CACHE 1 ),
    name character varying(10) COLLATE pg_catalog."default" NOT NULL,
    damage smallint NOT NULL,
    attack_speed smallint NOT NULL,
    bullets smallint NOT NULL,
    value integer NOT NULL,
    image text COLLATE pg_catalog."default",
    CONSTRAINT "WEAPONS_pkey" PRIMARY KEY (id)
)


CREATE TABLE IF NOT EXISTS "USER_HAS_WEAPON"
(
  user_id integer,
  weapon_id integer,
  CONSTRAINT user_id FOREIGN KEY (user_id)
    REFERENCES public."USERS" (user_id) MATCH SIMPLE
    ON DELETE CASCADE
    NOT VALID,
  CONSTRAINT weapon_id FOREIGN KEY (weapon_id)
    REFERENCES public."WEAPONS" (id) MATCH SIMPLE
    ON DELETE CASCADE
    NOT VALID
)