class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :poll_id
      t.integer :answer_num
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
