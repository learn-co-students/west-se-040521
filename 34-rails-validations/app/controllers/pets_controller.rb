class PetsController < ApplicationController

    before_action :find_pet, only: [:show, :edit, :update, :destroy]

    
    def index
        @pets = Pet.all
    end

    def show
    end

    def new
        @pet = Pet.new # since the new view is using form_for, must send 'blank' pet object to view
    end

    def create
        pet = Pet.create(pet_params)
        redirect_to pet_path(pet) # using the URL helper method for the show route
    end

    def edit # actually, this whole action could be commented out, thanks to the before_action :find_pet and implicit rendering
    end
    
    def update
        @pet.update(pet_params)
        redirect_to pet_path(@pet)
    end

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
