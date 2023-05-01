-- users table

CREATE TABLE users (
    user_id serial primary key,
    email varchar(255) not null unique,
    password varchar(255) not null,
    created_at date default current_date
);