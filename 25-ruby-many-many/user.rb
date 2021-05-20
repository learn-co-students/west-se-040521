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
    
end