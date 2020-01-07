DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30),
department_name VARCHAR(30),
price INTEGER(10),
stock_quantity INT(10),
PRIMARY KEY(id)
);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("Iphone", "Electronics", 1000, 10);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("Apple", "Produce", 3.99, 50);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("Speaker", "Electronics", 50, 5);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("Tv", "Electronics", 2000, 1);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("Sofa", "Furniture", 1000, 1);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("Harry Potter", "Books", 14.99, 10);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("ISPY", "Books", 9.99, 10);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("Airpods Gen 1", "Electronics", 100, 50);

INSERT INTO products (product_name,department_name, price, stock_quantity)
VALUES ("Macbook", "Electronics", 1000, 11);