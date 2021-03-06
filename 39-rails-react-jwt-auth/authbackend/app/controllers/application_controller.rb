class ApplicationController < ActionController::API 

   before_action :authorized

   def encode_token(payload)
        # look in .env file to see where the environment var 'JWT_SECRET' is set  
        JWT.encode(payload, ENV['JWT_SECRET'])
   end

   def auth_header
        request.headers['Authorization']
   end

   def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, ENV['JWT_SECRET'])[0]

            rescue JWT::DecodeError
                nil
            end
        end
   end

   def current_user
        if decoded_token
            user_id = decoded_token['user_id']
            user = User.find_by(id: user_id)
        end
   end

   def logged_in?
        !!current_user
   end

   def authorized
        render json: { message: "Please log in"}, status: :unauthorized unless logged_in?
   end
end

# here's an example of a fetch that would send a request containing the proper header
# fetch('http://localhost:3000/api/v1/profile', {
#     method: 'GET',
#     headers: {
#       Authorization: `Bearer <token>`
#     }
#   })