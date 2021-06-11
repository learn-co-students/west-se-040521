# Rails Form Associations

## SWBATs
- refresher on has_many, has_many, through: and belongs_to
- use generators to create migration ready for belong_to associations
- use form builder methods to create an associated object/record (i.e. collection_select)
- implement `dependent: :destroy` in order to normalize db

## Deliverables
- create migration and model for join table `appointments`
- add associations for many-to-many
- add controller actions and view to create new appoinments
- add validations for patient create/update
- handle validations errors on controller
- display errors to user
- add custom validation on appoinment model


#### A Quick Note on Collection Select:

Without form_builder methods:
```html
<select name="appointment[doctor_id]">
    <% @doctors.each do |doctor|  %>
        <option value="<%= doctor.id %>">
            <%= doctor.name %>
        </option>
    <% end %>
</select>
```

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

#### Adding Some Validations:

#### Displaying errors to our user:

```html
<!-- app/views/appointments/new.html.erb -->
<% if @appointment.errors.any? %>
  <ul>
    <% @appointment.errors.full_messages do |message| %>
    <li><%= message %></li>
    <% end %>
  </ul>
<% end %>
```


