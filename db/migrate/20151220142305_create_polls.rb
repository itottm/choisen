class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|

      t.string :title, null: false
      t.text :question, null: false
      t.text :choice01, null: false
      t.text :choice02, null: false
      t.text :choice03
      t.text :choice04
      t.text :choice05
      t.text :choice06
      t.text :choice07
      t.text :choice08
      t.text :image
      t.date :limit
      t.timestamps
    end
  end
end
