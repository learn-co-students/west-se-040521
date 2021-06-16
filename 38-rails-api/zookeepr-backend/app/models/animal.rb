class Animal < ApplicationRecord
  belongs_to :species

  enum gender: [:male, :female, :nonbinary]
end
