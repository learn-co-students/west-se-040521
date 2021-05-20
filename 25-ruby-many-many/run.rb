require 'pry'
require_relative './user'
require_relative './tweet'
require_relative './like'


coffee_dad = User.new("coffee_dad")
tea_aunt = User.new("tea_aunt")

tweet_1 = coffee_dad.post_tweet("mmmm coffee")
tweet_2 = coffee_dad.post_tweet("drinking my coffee")
tweet_3 = tea_aunt.post_tweet("steeping my tea")
tweet_4 = tea_aunt.post_tweet("ooo la ooolong")
tweet_5 = tea_aunt.post_tweet("peppermint soooo wintry")

coffee_dad.like_tweet(tweet_3)
coffee_dad.like_tweet(tweet_5)
tea_aunt.like_tweet(tweet_1)

Pry.start(binding)