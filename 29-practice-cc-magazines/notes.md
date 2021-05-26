## Association diagram

Reader --< Subscription >-- Magazine

### `subscriptions` table

| Column | Type |
| --- | --- |
| reader_id | integer |
| magazine_id | int |
| price | int | 

## TODO

- [x] create migration for subscription
- [x] run migrations
- [x] create Subscription model
- [x] add associations to models
- TEST all the things!
- [x] complete `seeds.rb`
- [x] run seeds

### AR Association macros
- Reader
    - has_many :subscriptions
    - has_many :magazines, through: :subscriptions
- Subscription
    - belongs_to :reader
    - belongs_to :magazine
- Magazine
    - has_many :subscriptions
    - has_many :readers, through: :subscriptions

### Aggregate and Association Methods

#### Subscription
- [x]`Subscription#print_details`
  - `puts` a string to the terminal to display the details of the subscription
  - the string should be formatted like this: `{reader name} subscribed to {magazine title} for ${subscription price}`

#### Reader

- [x]`Reader#subscribe(magazine, price)`
  - takes a `magazine` (an instance of the `Magazine` class) and a `price` (integer) as arguments, and creates a new `subscription` in the database associated with the magazine and the reader
- [x]`Reader#total_subcription_price`
  - returns the total price for all the reader's subscriptions
- [x]`Reader#cancel_subscription(magazine)`
  - takes a `magazine` instance and removes the subscription for this reader
  - you will have to delete a row from the `subscriptions` table to get this to work!

#### Magazine

- [x]`Magazine#email_list`
  - returns a `String` of a semi-colon separated list of emails for all the readers subscribed to this magazine
  - the string should be formatted like this: `email1@example.com;email2@example.com;email3@example.com`
- [x]`Magazine.most_popular`
  - returns the `Magazine` instance with the most subscribers