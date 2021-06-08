class PetsController < ApplicationController

    # GET /pets
    def index
        @pets = Pet.all
    end
end
