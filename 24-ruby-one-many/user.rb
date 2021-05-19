class User

    attr_reader :username

   def initialize(username)
        @username = username
        # @tweets = [] # removing this secondary 'source of truth'
   end

#    def username  // reader method
#         @username
#    end

   def tweets
        # @tweets
        Tweet.all.select {|tweet| tweet.user  ==  self }
        # could also match on username, but weaker match
   end

   def post_tweet(message) #takes a message
    #creates a new Tweet
    Tweet.new(message, self)
    #adds it to the user's tweet collection
    # add_tweet(tweet)
    # tweet
   end

   private

#    def add_tweet(tweet)
#         @tweets << tweet
#    end

end