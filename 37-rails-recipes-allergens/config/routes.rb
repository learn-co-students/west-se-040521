Rails.application.routes.draw do
  resources :allergies
  resources :ingredient_entries
  resources :ingredients
  resources :recipes
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
