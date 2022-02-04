CREATE DATABASE IF NOT EXISTS reviews;

USE reviews;

CREATE TABLE IF NOT EXISTS products (
  productid INT UNIQUE, productpage INT, count INT
);

CREATE TABLE IF NOT EXISTS reviews (
  reviewid INT UNIQUE, rating INT, summary VARCHAR(255), recommend BOOLEAN, response VARCHAR(255), body VARCHAR(255), reviewdate VARCHAR(255), reviewer_name VARCHAR(255), helpfulness INT, photos VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS photos (
  productid INT, reviewid INT, photoid: INT, photourl VARCHAR(255)
);
