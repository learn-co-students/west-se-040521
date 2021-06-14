class RecipesController < ApplicationController

    before_action :set_recipe, only: [:show, :edit, :update, :destroy]

    def index
        # byebug
        if params[:sort]
            @recipes = Recipe.all.sort_by {|r| r.ingredients.count}.reverse
        else
            @recipes = Recipe.all
        end
    end

    # def show

    # end

    def new
        @recipe = Recipe.new
    end

    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            redirect_to @recipe
        else
            render :new
        end
    end

    # def edit

    # end

    def update
        if @recipe.update(recipe_params)
            redirect_to @recipe
        else
            render :edit
        end
    end
    
    def destroy
        @recipe.destroy
        redirect_to recipes_path
    end

    private

    def recipe_params
        params.require(:recipe).permit(:name, :meal_type, :user_id)
    end

    def set_recipe
        @recipe = Recipe.find(params[:id])
    end
end
