class PetsController < ApplicationController

    before_action :find_pet, only: [:show, :edit, :update, :destroy]

    # GET /pets
    def index
        @pets = Pet.all
        render :index
    end

    # GET /pets/:id
    def show
        # raise params.inspect
        # find_pet
        # byebug
    end

    #GET /pets/new
    def new
        @pet = Pet.new
    end

    # POST /pets
    def create
        # byebug
        pet = Pet.create(pet_params)
        redirect_to pet_path(pet)
    end

    # GET /pets/:id/edit
    def edit
        # find_pet
        
    end
    
    # PATCH /pets/:id
    def update
        # find_pet
        @pet.update(pet_params)
        redirect_to pet_path(@pet)
    end

    # DELETE /pets/:id
    def destroy
        @pet.destroy
        redirect_to pets_path
    end

    private

    def pet_params
        params.require(:pet).permit(:name, :species, :year_of_birth, :good_with_kids)
    end

    def find_pet
        @pet = Pet.find(params[:id])
    end
end
