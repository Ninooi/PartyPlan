create database partyplan;
use partyplan;

-- Caso aja erro de auth mode rode: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root' flush privileges;

create table users (
	id MEDIUMINT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY (id),
    name char(50) NOT NULL, 
    birth_date timestamp NOT NULL, 
    email char(50) NOT NULL, 
    password varchar(255) NOT NULL, 
    cellphone integer, 
    document integer NOT NULL
); 