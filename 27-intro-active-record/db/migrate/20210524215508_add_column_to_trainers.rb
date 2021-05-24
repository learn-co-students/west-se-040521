class AddColumnToTrainers < ActiveRecord::Migration[5.2]
  def change
    add_column(:trainers, :club, :string)
  end
end
