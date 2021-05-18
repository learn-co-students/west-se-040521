# ******************************
# Everything is an Object in Ruby
# ******************************

# what is the data type of x?
# what is the value of x?
# x = 3
# puts x.class
# puts x

# y = "Hello world!"
# puts y.class
# puts y.methods.count
# arr = y.split
# puts arr.inspect
# puts arr.methods

# message_name = :+
# puts x.send(message_name, 1) === x + 1
 
# names = [
#     "Diana",
#     "Chau",
#     "Harmandeep",
#     "Christian"
# ]
# puts names[0]
# puts names.[](1)
# puts names.send(:[], 2)

# # names.respond_to_unknown_message
# puts names.respond_to? :join
# puts 1.odd?

# ******************
# What is an object?
# ******************

o = Object.new
puts o
puts o.object_id
puts (o.object_id * 2).to_s(16)
z = Object.new
puts z.object_id == o.object_id
a = z
puts z.object_id == a.object_id
a = Object.new
puts z.object_id == a.object_id
b = 'bamboozles'
puts b.object_id


# *************************
# Creating our own Objects
# *************************

# class Car
# Properties:
#     - model
#     - year
#     - top_speed
#     - make
#     - engine_type
#     - doors
#     - color
# Methods:
#     - break
#     - accelerate

# Instance => individual car object
# 2021 audi Q5 blue 4-door
# 2021 audi Q7 white 5-door
