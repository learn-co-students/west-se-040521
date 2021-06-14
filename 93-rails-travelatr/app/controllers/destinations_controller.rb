class DestinationsController < ApplicationController
  before_action :set_destination, only: [:show]

  def show
  end

  private

  def set_destination
    @destination = Destination.find(params[:id])
  end
end
