class CreateUserarts < ActiveRecord::Migration[6.0]
  def change
    create_table :userarts do |t|
      t.references :art, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
