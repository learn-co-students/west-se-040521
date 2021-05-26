# SWBATs 
 - Explain how ActiveRecord works for non-related models
 - Implement one-to-many relationships using ActiveRecord has_many and belongs_to
 - Implement many-to-many relationships using ActiveRecord has_many, :through
 - Describe the methods that the relationship macros add to a model
 - Practice looking up library documentation
    - Specifically, looking up documentation for ActiveRecord
    - Migrations
    - Association Macros
    - Rake tasks

Patient --< Appointment >-- Doctor >-- Department

## CFU: Adding a has_many relationship
* We'll be adding a Department model
* the relationship will be a `Department` has many `Doctors`
* create the necessary migration files and run the migration
* create a `Department` model class and add the appropriate AR association macros
* modify `seeds.rb` so that it creates the following Departments in the db: "Oncology", "Cardiology", "Pediatrics", "Radiology"
* modify `seeds.rb` so that created Doctors belong to a deparment
* test in console to be sure that `Department#doctors` and `Doctor#department` return the expected objects