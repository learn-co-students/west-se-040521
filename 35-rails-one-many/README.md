# Rails Associations

## SWBATs

* Refresher on has_many and belongs_to
* Use Rails form helper methods that create an associated object
* Implement dependent: :destroy in order to destroy associated objects to normalize database

## Building a has_many and belongs_to

For our app, we're creating cows and farmers. A farmer `has_many` cows, and a cow `belongs_to` a farmer

Farmer --< Cow

---

#### A Quick Note on Collection Select:

[Collection select](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select) is looking for the following in order:

1.  the method we want to call on `@cow:` farmer_id
2.  the collection we want to use to populate our dropdown with: Farmer.all
3.  the value method; what will show up in our params and as a value in our `<option>` tags: `farmer_instance.id`
4.  the text method; what will show up inside the option tag, what will the user see? `farmer_instance.name`

---

#### Quick Note about Render vs Redirect:

- redirect is a **GET request**, that calls the cows#new method. This method resets the `@cow` instance variable
- `render :new`
- this will render our `:new` form without a page reload. This allows us to keep the state of our form; `@cow` does not change

---

## Resources

[Collection select](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select)
[Collection_select blog post](https://theresamorelli.medium.com/collection-select-what-the-heck-4e1cabc4be4b)