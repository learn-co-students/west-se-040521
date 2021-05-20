class User

    attr_reader :username

    def initialize(username)
        @username = username
        # @tweets = [] NOT a single source of truth
    end

    
    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
        # here is .select written out using a .map method instead
        # Tweet.all.map do |tweet|
        #     if tweet.user == self
        #         return tweet
        #     end
        #     return nil
        # end.compact
    end
    
    def post_tweet(message)
        #create a new tweet
        Tweet.new(message, self)
    end

    def like_tweet(tweet)
        Like.new(self, tweet)
    end

    def likes
        # returns an array of all likes belonging to this user instance
        # look through all the likes
        # select out each like where the likes user matches this user instance
        Like.all.select do |like|
            like.user == self
        end
    end

    def liked_tweets
        # returns a collection of all the tweets this user has liked
        self.likes.map {|like| like.tweet}
    end
    
end