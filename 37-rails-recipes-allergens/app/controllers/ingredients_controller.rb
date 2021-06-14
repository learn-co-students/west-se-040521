class IngredientsController < ApplicationController

    def index
        @ingredients = Ingredient.left_joins(:users).group(:id).order('count(users.id) DESC')
    end
end
