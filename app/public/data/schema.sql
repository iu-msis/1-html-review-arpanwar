DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
    name varchar(48) UNIQUE NOT NULL, 
    author varchar(24),
    
);

INSERT INTO students (id, name, author) VALUES 
(1, 'Harry Potter 1','J.K Rowling'),
(2, 'Harry Potter 2','J.K Rowling'),
(3, 'Harry Potter 3','J.K Rowling');
