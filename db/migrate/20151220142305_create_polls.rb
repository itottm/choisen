class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|

      t.integer :answer, null: false
      t.string :remote_addr, unique: true
      t.string :user_agent, unique: true
      t.date :answer_date, unique: true
      t.timestamps
    end
  end
end
