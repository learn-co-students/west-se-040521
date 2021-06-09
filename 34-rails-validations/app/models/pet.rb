class Pet < ApplicationRecord

    SPECIES = ["cat", "dog", "fish", "bird"]

    validates(:name, {presence: true, uniqueness: true}) # full syntax with parenthese around arguments
    validates :year_of_birth, numericality: {less_than: Date.current.year, only_integer: true} # shortened syntax without ()
    validates :species, inclusion: {in: SPECIES, message: "%{value} is not a valid species"}
    validate :age_under_hundred # use singular validate to call a custom validation method

    def age
        Date.current.year - self.year_of_birth
    end

    def age_under_hundred # this is a custom validation method
        if age > 100
            errors.add(:year_of_birth, "can't be more than 100 years ago!")
        end
    end


end
