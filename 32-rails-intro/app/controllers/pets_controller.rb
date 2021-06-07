class PetsController < ApplicationController
  def index
    @pets = Pet.all
    # byebug
    render :index
  end

  def show
  end

  # def about
  #   render 'about'
  # end
end
