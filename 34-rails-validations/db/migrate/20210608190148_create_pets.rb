class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.integer :year_of_birth
      t.boolean :good_with_kids

      t.timestamps
    end
  end
end
