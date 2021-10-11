DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(128) UNIQUE NOT NULL, 
    author varchar(64) NOT NULL,
    publisher varchar(64) NOT NULL,
    year_published int,
    page_count int,
    price real
    
);
