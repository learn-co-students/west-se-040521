# Rails Form REST

## SWBAT
- Discuss and Review Forms
- Implement Edit, Update, New and Create 
- Use form_for, form_tag, link_to, button_tag, submit_tag
- Secure data creation with Strong params
- (Checking information before creating)

## REST & CRUD
| HTTP        | CRUD          | Route                | Action
| ----------- | ------------- |----------------------| -----
| GET         | READ          | get '/candies'       | index
| GET         | READ (one)    | get '/candies/:id'   | show
| GET         | READ (form)   | get '/candies/new'   | new
| POST        | CREATE        | post '/candies'      | create
| GET         | READ (form)   | get '/candies/:id/edit | edit
| PATCH       | UPDATE        | patch '/candies/:id' | update
| DELETE      | DESTROY       | delete '/candies/:id' | destroy


## CHEAT SHEET

### What is pluralized?
- Everything but the Model 

### How can I find out if my word is pluralized?
```ruby
'word'.pluralize
```

### Where are my....???
- Models
    - app/models
- Controllers
    - app/controllers
- Views
    - app/views
- Routes
    - config/routes 

- Migrations 
    - db/migrate

- Seeds
    - db/seeds

### How do I make a new rails app?
```ruby
rails new app_name
```

### How do I use rails generators? 
#### DO NOT USE
```ruby
rails generate scaffold 
```
- this will do everything for you and you are not allowed to use it until after phase-2, you must first learn how rails works, it generates a lot of files you don't need or know how to use yet so it's very obvious when you use it. **It is forbidden on the Code  Challenges and Projects**

#### DO USE

```ruby
rails g model NameOfModel column_name:datatype column_name2:datatype2
```
- will create model and migration\

```ruby
rails g controller name_of_controller
```
- will create a controller, routes, and views

```ruby
rails g migration add_new_column_name_to_table_name column_name:datatype 
```
- adds a new column

```ruby
rails g migration remove_column_name_from_table_name column_name:datatype
```
- removes a column

```ruby
rails g resource ModelName column_name:datatype column_name2:datatype2
```
- will create model, controller, views and routes

### Routes 
```ruby
#method 'route', to: 'controller#action'
get '/candy_stores', to: 'candy_stores#show'

```
- custom route

```ruby
#method 'route', to: 'controller#action', as: 'prefix'
get '/candy_stores', to: 'candy_stores#show', as: 'candy'
```
- to draw a single route _and_ create a path helper (e.g. candy_path)

```ruby
#resources :model_name 
resources :candy_stores
```
- all REST routes 
```ruby
resources :model_name. only: [:index, :show, :new, :create, :edit, :update, :delete, :destroy]
resources( :candy_stores, {only: [:index]})
```
- specific routes (use this one)


## Resources 
[Security](http://guides.rubyonrails.org/v3.2.8/security.html)
[Rails Guides](http://edgeguides.rubyonrails.org/active_record_validations.html)
[Form For](https://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object)
[Rails Strong Params](https://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters)