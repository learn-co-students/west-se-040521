# Many to Many Relationships


## Objectives 
  * Implement both sides of a many to many relationship
  * Practice keeping groups of data related to classes on the class as a class variable
  * Demonstrate single source of truth by not storing collections of objects on other objects
  * Demonstrate single source of truth by not storing one object in multiple collections

## Deliverables
* User class
  * `#like_tweet` that accepts as a tweet instance as a parameter
  * `#liked_tweets` that returns a collection of all the tweets this user has liked
* Tweet class
  * `#likers` that returns a collection of all the Users who have liked this tweet

## CFU: Has-Many-Through
Implement `User#liked_tweets` which will return an array  of all the tweets a user has liked. Are there any existing methods that can help with this?
Also implement `Tweet#likers` which will return an array of all the users who have liked a tweet instance.