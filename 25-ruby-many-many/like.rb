class Like
    
    # Class vars and methods
    @@all = []
    
    def self.all
        @@all
    end

    # macros

    attr_reader :user, :tweet

    # instance vars and methods

    def initialize(user, tweet)
        @user, @tweet = user, tweet 
        self.save
    end

    def save
        @@all << self
    end

end
