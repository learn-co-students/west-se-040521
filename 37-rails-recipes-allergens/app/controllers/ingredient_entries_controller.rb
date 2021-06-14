class IngredientEntriesController < ApplicationController

    def new
        @ingredient_entry = IngredientEntry.new
    end

    def create
        @ingredient_entry = IngredientEntry.new(ie_params)
        if @ingredient_entry.save
            redirect_to @ingredient_entry.recipe
        else
            render :new
        end
    end

    private

    def ie_params
        params.require(:ingredient_entry).permit(:recipe_id, :ingredient_id, :amount)
    end
end 
