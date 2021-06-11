class Patient < ApplicationRecord
    has_many :appointments
    has_many :doctors, through: :appointments

    validates :name, :condition, presence: true
end
