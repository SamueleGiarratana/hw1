Create DATABASE vestiti;
USE vestiti;

CREATE TABLE utente (
    id integer primary key auto_increment,
    username varchar(16) not null unique,
    password varchar(255) not null,
    email varchar(255) not null unique,
    name varchar(255) not null,
    surname varchar(255) not null,
    abbonamento varchar(10) null
   

) Engine = InnoDB;

CREATE TABLE carrello(
    username varchar(16) not null unique, 
    abbigliamento varchar(30),
   primary key(username,abbigliamento)
    
)engine=InnoDb;


CREATE TABLE songs (
    id integer primary key auto_increment,
    user_id integer not null,
    foreign key (user_id) references utente(id),
    song_id varchar(255),
    content json
) Engine = InnoDB;