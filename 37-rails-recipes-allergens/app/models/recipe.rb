class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredient_entries
  has_many :ingredients, through: :ingredient_entries

  validates :name, presence: true
  validates :meal_type, inclusion: {in: %w(Breakfast Lunch Dinner Appetizers Sweets)}
end
