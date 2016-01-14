class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|

      t.string :title, null: false
      t.text :question, null: false
      t.text :choices, null: false
      t.text :image
      t.date :limit
      t.timestamps
    end
  end
end
