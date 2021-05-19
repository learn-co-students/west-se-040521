class Tweet

    @@all = [] # our single source of truth for tweets

    def self.all
        @@all
    end

    attr_reader :user, :message

    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    # def message // standard reader, replaced by attr_reader
    #     @message
    # end

    # def user // reader method
    #     @user
    # end

    def username
        self.user.username 
    end


end