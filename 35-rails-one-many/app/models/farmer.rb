class Farmer < ApplicationRecord
    has_many :cows, dependent: :destroy
end
