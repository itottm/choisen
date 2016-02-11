class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :poll_id
      t.integer :answer_num, null: false
      t.integer :user_id, null: false, default: 0

      t.timestamps null: false
    end

  end
end
