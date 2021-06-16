# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Animal.destroy_all
Species.destroy_all

5.times { Species.create(name: Faker::Creature::Animal.name) }
5.times { Animal.create(name: Faker::Name.name, gender: rand(0..2), species: Species.all.sample)}