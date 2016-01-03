class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.date :birthday
      t.integer :gender
      t.integer :area

      t.timestamps null: false
    end
  end
end
