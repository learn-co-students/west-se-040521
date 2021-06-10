class FarmersController < ApplicationController

    before_action :find_farmer, only: [:show, :destroy]

    def index
        @farmers = Farmer.all
    end

    def show
    end

    def destroy
        @farmer.destroy
        redirect_to farmers_path
    end

    private

    def find_farmer
        @farmer = Farmer.find(params[:id])

    end
end
