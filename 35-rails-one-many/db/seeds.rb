# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Clearing the db"
Cow.destroy_all
Farmer.destroy_all

Farmer.create([{name: 'billybob'}, {name: 'old macdonald'}, {name: 'macgregor'}, {name: 'angie'}])
5.times do
    Cow.create(name: Faker::FunnyName.name, spots: rand(0..25), farmer: Farmer.all.sample)
end