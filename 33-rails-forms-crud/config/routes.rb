Rails.application.routes.draw do
  get '/pets/about', to: 'pets#about', as: 'about'
  resources :pets
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
