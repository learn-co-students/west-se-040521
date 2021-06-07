class AddAdoptedToPets < ActiveRecord::Migration[6.1]
  def change
    add_column :pets, :adopted, :boolean
  end
end
