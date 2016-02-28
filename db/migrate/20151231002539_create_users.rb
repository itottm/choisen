class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :gender
      t.integer :prefecture_code
      t.string :age


      t.timestamps null: false
    end

  end
end
