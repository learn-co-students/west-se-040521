class Tweet

    
    @@all = []
    
    def self.all # the context of self is the class
        @@all
    end
    
    attr_reader :message, :user

    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def username
        self.user.username
    end

    def likes
        Like.all.select {|like|
            # binding.pry
            like.tweet == self
        }
    end

    def likers
        self.likes.map {|like| like.user}
    end


end