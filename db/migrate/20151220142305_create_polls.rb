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
      t.integer :answer01, null: false, default: 0
      t.integer :answer02, null: false, default: 0
      t.integer :answer03, default: 0
      t.integer :answer04, default: 0
      t.integer :answer05, default: 0
      t.integer :answer06, default: 0
      t.integer :answer07, default: 0
      t.integer :answer08, default: 0
      t.text :image
      t.timestamps
    end
  end
end
