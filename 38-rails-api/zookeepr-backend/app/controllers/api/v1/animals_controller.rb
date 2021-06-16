class Api::V1::AnimalsController < ApplicationController

    def index
        animals = Animal.all
        render json: animals
        # render json: animals, only: [:name, :gender, :id],
        # include: { species: {only: [:id, :name]}}
    end
end
