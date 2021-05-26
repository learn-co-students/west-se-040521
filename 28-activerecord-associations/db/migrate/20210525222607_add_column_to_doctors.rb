class AddColumnToDoctors < ActiveRecord::Migration[6.1]
  def change
    add_column :doctors, :department_id, :integer
  end
end
