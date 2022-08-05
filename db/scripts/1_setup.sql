DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
	id SERIAL PRIMARY KEY,
	houseNumber INT,
	streetName VARCHAR ( 50 ),
	postcode VARCHAR ( 15 ),
	city VARCHAR ( 20 ),
	ownerId INT 
);

DROP TABLE IF EXISTS owners;
CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
	firstName VARCHAR (50),
	lastName VARCHAR (50),
    houseId INT,
    noOfOccupants INT,
    age INT
);