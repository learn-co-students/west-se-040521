class Api::V1::AnimalsController < ApplicationController

    def index
        animals = Animal.all
        render json: animals
        # render json: animals, only: [:name, :gender, :id],
        # include: { species: {only: [:id, :name]}}
    end

    def create
        # raise params.inspect  # this is another way to debug your code by deliberately raising an exception that displays the complete parameters
        species = Species.find_or_create_by(name: params[:species])
        animal = Animal.new(name: params[:name], gender: params[:gender], species: species)
        # grabbing individual values from params as done above offers as much security as strong params--it doesn't allow any malicious values to be sent to the db
        # strong params just allows one to keep the benefits of mass-assignment while making it secure

        if animal.save
            render json: animal
        else
            render json: {error: animal.errors.full_messages}, status: :not_acceptable
            # see link to blog in README for some more robust error handling
        end
    end

    # private 

    # Strong params would be an option to allow mass assignment when creating a resource IF our create and/or update actions were only dealing with one model.  Because this particular use case handles 2 models in the create action, it doesn't work well, you'd have to do something like the following
    def animal_params
        species = Species.find_or_create_by(name: params[:species])
        permitted = params.permit(:name, :gender)
        permitted["species_id"] = species.id
        permitted
    end
end
