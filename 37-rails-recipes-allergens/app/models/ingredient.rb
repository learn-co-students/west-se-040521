class Ingredient < ApplicationRecord
    has_many :ingredient_entries
    has_many :recipes, through: :ingredient_entries
    has_many :allergies
    has_many :users, through: :allergies
end
