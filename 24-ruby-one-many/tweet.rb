class Tweet

    @@all = []

    def self.all
        @@all
    end

    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def message
        @message
    end

    def user
        @user
    end

    def username
        @user.username
    end


end