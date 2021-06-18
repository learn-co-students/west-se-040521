class Api::V1::UserartsController < ApplicationController

    def create
          userart = Userart.new(user_id: current_user.id, art_id: params[:art_id])
          if userart.save
            render json: {user: UserSerializer.new(current_user)}
          else
            render json: userart.errors
          end
        end
      
end
