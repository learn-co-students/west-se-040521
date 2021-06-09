Rails.application.routes.draw do
  get '/pets/about', to: 'pets#about', as: 'about'
  # get '/pets', to: 'pets#index'
  # get '/pets/new', to: 'pets#new'
  # get '/pets/:id', to: 'pets#show', as: "pet"
  # post '/pets', to: 'pets#create'

  # you could draw each route individually as above, but that can get tedious, hence the resources macro below
  resources :pets
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
