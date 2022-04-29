use  eventplannerdb;



CREATE TABLE `eventplannerdb`.`User` (
  `user_id` INT NOT NULL,
  `Name` VARCHAR(50) NULL,
  `Email_id` VARCHAR(100) NULL,
  `Password` VARCHAR(50) NULL,
  `Street Address` VARCHAR(100) NULL,
  `City` VARCHAR(50) NULL,
  `Zipcode` CHAR(5) NULL,
  PRIMARY KEY (`user_id`));
  

CREATE TABLE `eventplannerdb`.`Review` (
  `review_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `Rating` DECIMAL(2,1) NULL,
  `review_decs` VARCHAR(500) NULL,
  PRIMARY KEY (`review_id`),
  FOREIGN KEY (`user_id`) REFERENCES User(`user_id`));
  
CREATE TABLE `eventplannerdb`.`Occasion` (
  `occasion_id` INT NOT NULL,
  `occasion_name` VARCHAR(50) NULL,
  PRIMARY KEY (`occasion_id`));
  
CREATE TABLE `eventplannerdb`.`Decoration` (
  `decoration_id` INT NOT NULL,
  `occasion_id` INT NOT NULL,
  `decoration_name` VARCHAR(50) NULL,
   PRIMARY KEY (`decoration_id`),
   FOREIGN KEY (`occasion_id`) REFERENCES Occasion(`occasion_id`));
   
CREATE TABLE `eventplannerdb`.`Cuisine` (
  `cuisine_id` INT NOT NULL,
  `occasion_id` INT NOT NULL,
  `cuisine_name` VARCHAR(50) NULL,
   PRIMARY KEY (`cuisine_id`),
   FOREIGN KEY (`occasion_id`) REFERENCES Occasion(`occasion_id`));
   
CREATE TABLE `eventplannerdb`.`Other` (
  `other_id` INT NOT NULL,
  `occasion_id` INT NOT NULL,
  `other_name` VARCHAR(50) NULL,
   PRIMARY KEY (`other_id`),
   FOREIGN KEY (`occasion_id`) REFERENCES Occasion(`occasion_id`));

CREATE TABLE `eventplannerdb`.`Booking_History` (
  `booking_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `occasion_id` INT NOT NULL,
  `capacity` INT NOT NULL,
  `address` VARCHAR(50) NULL,
  `locality` VARCHAR(50) NULL,
  `date_event` date NOT NULL,
   PRIMARY KEY (`booking_id`),
   FOREIGN KEY (`user_id`) REFERENCES User(`user_id`),
   FOREIGN KEY (`occasion_id`) REFERENCES Occasion(`occasion_id`)
   );
   
ALTER TABLE Booking_History
ADD budget_in_dollar INT NOT NULL ;

