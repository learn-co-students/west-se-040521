class Magazine < ActiveRecord::Base

    def self.most_popular
        self.all.max {|a, b| a.subscriptions.length <=> b.subscriptions.length }
    end

    has_many :subscriptions
    has_many :readers, through: :subscriptions

    def email_list
        self.readers.map{|reader| reader.email }.join(";")
    end
  
end