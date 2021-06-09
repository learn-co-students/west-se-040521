# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Pet.destroy_all

20.times do

    Pet.create(name: Faker::TvShows::BojackHorseman.unique.character,
               good_with_kids: [true, false].sample,
               species: ["cat", "dog", "bird"].sample,
               year_of_birth: (2000...2020).to_a.sample)
end

