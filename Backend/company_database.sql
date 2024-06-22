CREATE SCHEMA company_database;

USE company_database;

CREATE TABLE company_info (
  `id` INT NOT NULL AUTO_INCREMENT,
  `company_name` VARCHAR(255) NULL,
  `moc` VARCHAR(255) NULL,
  `academic_year` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));
  
INSERT INTO company_info (`company_name`, `moc`, `academic_year`) 
VALUES ('ibm ', 'whatsapp', '3333');

SELECT * FROM company_database.company_info;	

-- just if you have any database problem while connecting 
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
-- FLUSH PRIVILEGES;
