DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
	houseId SERIAL PRIMARY KEY,
	houseNumber INT,
	streetName VARCHAR ( 50 ),
	postcode VARCHAR ( 8 ),
	city VARCHAR ( 20 ),
	ownerId INT NOT NULL
);

DROP TABLE IF EXISTS owners;
CREATE TABLE owners (
    ownerId SERIAL PRIMARY KEY,
    houseId REFERENCES houses.houseId,
    nOfOccupants INT,
    age INT
);