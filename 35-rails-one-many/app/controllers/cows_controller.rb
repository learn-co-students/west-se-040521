class CowsController < ApplicationController

    def show
        @cow = Cow.find(params[:id])
    end

    def new
        @cow = Cow.new
    end

    def create
        @cow = Cow.new(cow_params)
        if @cow.save
            redirect_to @cow
        else
            render :new
        end
    end

    private

    def cow_params
        params.require(:cow).permit(:name, :spots, :farmer_id)
    end



end
