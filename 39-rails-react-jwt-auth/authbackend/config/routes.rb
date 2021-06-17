Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :userarts
      resources :arts
      resources :artists
      resources :users
      post '/login', to: 'users#login'
    end
 end
end
