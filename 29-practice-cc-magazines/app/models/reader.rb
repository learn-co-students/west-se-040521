class Reader < ActiveRecord::Base

    has_many :subscriptions
    # has_many :subscriptions, dependent: :destroy
    has_many :magazines, through: :subscriptions

    def subscriptions
        Subscription.all.map{|sub| sub.reader == self }
    end

    def subscribe(magazine, price)
        # Subscription.create(reader: self, magazine: magazine, price: price)
        self.subscriptions.create(magazine: magazine, price: price)
    end

    def total_subscription_price
        # self.subscriptions.sum{|sub| sub.price }
        self.subscriptions.sum(:price)
    end

    def cancel_subscription(magazine)
        sub = self.subscriptions.find_by(magazine: magazine)
        sub.destroy
    end
  
end