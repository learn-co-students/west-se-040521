require 'pry'
require_relative './user'
require_relative './tweet'

coffee_dad = User.new("coffee dad")
tea_sis = User.new("tea sister")

t1 = coffee_dad.post_tweet("mmmm coffeeee")
t2 = tea_sis.post_tweet("mmm minty")

Pry.start(binding)