# One to Many Relationships

## Objectives

* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods
* Demonstrate single source of truth
* Infer type of method (class or instance) through naming conventions

- Model: a class whose primary purpose is to store data
- Domain: The subject matter of the problem (eg. Canvas' domain is online learning)
- Domain modeling: creating models for your domain to represent real or abstract ideas
- Relationships: How one model is connected to another model
 - One to many relationsip: describes a single mode that contains or tracks multiple instances of another model

## Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takse a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user

## CFU
Refactor the User class so that it only uses a Single Source of Truth for tweets.

## Method Lookup Chain
1. looks for local var
2. looks for method
3. if not called on an explicit object, implies self
4. look for local bareword
5. keeps broadening its scope
6. finally raises an exception if unsuccessful