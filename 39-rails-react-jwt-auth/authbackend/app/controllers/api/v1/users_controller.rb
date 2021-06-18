class Api::V1::UsersController < ApplicationController

    skip_before_action :authorized, only: [:create, :login]

    def create
        user = User.new(user_params)
        # byebug
        if user.save
            token = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user) , jwt: token}, status: :created
        else
            render json: {message: "Invalid credentials"}, status: :unauthorized
        end
    end

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            token = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user) , jwt: token}, status: :accepted
        else
            render json: {error: 'Incorrect username or password'}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :bio, :avatar)
    end
end
