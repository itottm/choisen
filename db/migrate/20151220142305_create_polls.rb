class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.string :title, null: false
      t.text :question, null: false
      t.text :choices, null: false
      t.text :image
      t.text :limit, null: false
      t.integer :limit_flg, default: 1
      t.integer :user_id, null: false, default: 0
      t.timestamps null: false
    end
  end
end
