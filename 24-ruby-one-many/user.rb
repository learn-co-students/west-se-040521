class User

   def initialize(username)
        @username = username
        @tweets = []
   end

   def username
        @username
   end

   def tweets
        @tweets
   end

   def post_tweet(message) #takes a message
    #creates a new Tweet
    tweet = Tweet.new(message, self)
    #adds it to the user's tweet collection
    add_tweet(tweet)
    tweet
   end

   private

   def add_tweet(tweet)
        @tweets << tweet
   end

end