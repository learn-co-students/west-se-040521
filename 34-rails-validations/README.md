# Rails Forms and Validations

## Overview
- Understand _why_ validations are necessary
- Understand how to implement both built in and custom validations in a Rails app.
- Review RESTful Routes in Rails

---

### Why Use Validations?

- This is your typical user on your app:
  ![Your users on your site](https://camo.githubusercontent.com/bd5a0e0355fa6a8c1f5478f197be5562a479d41a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5a665531314f44616e6c6f43412f67697068792e676966)

- We want to protect against unwanted, unexpected data. We should be programming defensively
- For example, would it make sense for our app to allow a bagel with an empty name to be created?

- ActiveRecord provides us _several_ built in validations and I **highly recommend reading the docs** (linked below)
- If we need custom functionality, we can also write our own methods
- These validations will be run **any time i try to write to the database** -> `Pet.create`, `Pet#update`, `Pet#save`

---

### External Resources

- [Active Record Validations Docs](http://guides.rubyonrails.org/active_record_validations.html)
- [Displaying Validations in Views Rails Docs](http://guides.rubyonrails.org/active_record_validations.html#displaying-validation-errors-in-views)
- [Form For](https://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object)
- [Rails Strong Params](https://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters)
- [Ruby Private Keyword](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)
