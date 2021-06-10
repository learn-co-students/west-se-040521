Rails.application.routes.draw do
  resources :cows, only: [:show, :new, :create]
  resources :farmers, only: [:index, :show, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
