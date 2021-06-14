class IngredientEntry < ApplicationRecord
  belongs_to :recipe
  belongs_to :ingredient

  validates :amount, presence: true
end
