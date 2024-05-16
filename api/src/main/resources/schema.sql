DROP DATABASE IF EXISTS recipes;
CREATE DATABASE recipes;

USE recipes;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL
);

CREATE TABLE ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ingredient_name VARCHAR(50) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE dishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dish VARCHAR(50) NOT NULL,
    ingredient1_id INT,
    ingredient2_id INT,
    ingredient3_id INT,
    ingredient4_id INT,
    ingredient5_id INT,
    img_url VARCHAR(50),
    FOREIGN KEY (ingredient1_id) REFERENCES ingredients(id),
    FOREIGN KEY (ingredient2_id) REFERENCES ingredients(id),
    FOREIGN KEY (ingredient3_id) REFERENCES ingredients(id),
    FOREIGN KEY (ingredient4_id) REFERENCES ingredients(id),
    FOREIGN KEY (ingredient5_id) REFERENCES ingredients(id)
);

CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dish_id INT,
    recipe VARCHAR(1000) NOT NULL,
    FOREIGN KEY (dish_id) REFERENCES dishes(id)
);
CREATE TABLE dish_ingredients(
id INT AUTO_INCREMENT PRIMARY KEY,
dish_id INT,
ingredient_id INT,
FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
FOREIGN KEY (dish_id) REFERENCES dishes(id)
);