class PetsController < ApplicationController

    before_action :find_pet, only: [:show, :edit, :update, :destroy]

    # show ALL pets
    def index
        @pets = Pet.all #ask Pet model for data and pass @pets instance var to the view
        render :index # look for folder called /pets in the views folder, then render the index.html.erb
    end

    # show ONE pet
    def show
    end

    # send the new Pet form as a response to this GET request
    def new
        @pet = Pet.new # since the new view is using form_for, must send 'blank' pet object to view
    end

    # process the data from a POST request
    def create
        @pet = Pet.new(pet_params) # pass in return value of private pet_params method, which is a hash of safelisted attributes
        if @pet.save # calling .save runs AR validations on model, saves to db if object passes validation, and returns a boolean whether save was successful or not
            redirect_to pet_path(@pet) # redirect fires new GET request, which will hit the PetsController#show
        else # if pet is not valid
            render :new # render is NOT a new get request, so @pet can be passed to the :new view when the form rerenders, with AR errors object attached
        end
    end

    def edit # actually, this whole action could be commented out, thanks to the before_action :find_pet and implicit rendering
    end
    
    def update
    
       if @pet.update(pet_params)  # calling .update runs AR validations on model, updates a record in db if object passes validation, and returns a boolean whether the update was successful or not
            # rails provides a method for sending data across multiple requests
            # we can access this via flash[:KEY] hash syntax
            flash[:notice] = "Pet was updated"
            # this flash hash object will get incorporated into the GET request sent by the redirect below, and will persist only through the next request/response cycle
            redirect_to @pet # for the show route, 'pet_path' may be omitted and Rails will still imply the proper path
       else
            flash[:error] = @pet.errors.full_messages
            redirect_to edit_pet_path(@pet)
       end
    end

    def destroy
        @pet.destroy
        redirect_to pets_path
    end

    # the methods below private are only accessible by the public instance methods above, but cannot be called directly on an instance of the PetsController class
    private

    def pet_params
        # returns a hash of safelisted attributes filtered from params
        params.require(:pet).permit(:name, :species, :year_of_birth, :good_with_kids)
    end

    def find_pet
        @pet = Pet.find(params[:id])
    end
end
