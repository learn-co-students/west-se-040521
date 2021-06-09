class PetsController < ApplicationController

    before_action :find_pet, only: [:show, :edit, :update, :destroy]

    # def about
    #   render 'about' => if the only logic in an action can be done implicitly, the whole action can be implied
    # end

    # GET /pets
    def index
        @pets = Pet.all
        # render 'index' => where render is a method call and 'index' is an argument
        # rails will implicitly try to render a view template with the same name as the action
    end

    # GET /pets/:id
    def show
        # find_pet => now called by the before_action filter at the top of the class
        # @pet = Pet.find(params[:id]) => abstracted into the find_pet helper method
    end

    #GET /pets/new
    def new
        @pet = Pet.new # since the new view is using form_for, must send 'blank' pet object to view
        # render(:new) 
    end

    # POST /pets
    def create
        puts "post request to /pets has been made and arrived in create" # => judicious puts can help with debugging
        # byebug
        pet = Pet.create(pet_params)
        redirect_to pet_path(pet) # using the URL helper method for the show route
    end

    # GET /pets/:id/edit
    def edit # actually, this whole action could be commented out, thanks to the before_action :find_pet and implicit rendering
        # find_pet
    end
    
    # PATCH /pets/:id
    def update
        # find_pet
        # raise params.inspect => deliberately raising an error that will also show the content of params
        @pet.update(pet_params)
        redirect_to pet_path(@pet)
    end

    # DELETE /pets/:id
    def destroy
        @pet.destroy
        redirect_to pets_path
    end

    private

    # strong params that take advantage of Rails security features to prevent e.g. SQL injection attacks
    def pet_params
        params.require(:pet).permit(:name, :species, :year_of_birth, :good_with_kids)
    end

    def find_pet
        @pet = Pet.find(params[:id])
    end
end
