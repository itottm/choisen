# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151231002539) do

  create_table "answers", force: :cascade do |t|
    t.integer  "poll_id"
    t.integer  "answer_num",             null: false
    t.integer  "user_id",    default: 0, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "polls", force: :cascade do |t|
    t.string   "title",                  null: false
    t.text     "question",               null: false
    t.text     "choices",                null: false
    t.text     "image"
    t.text     "limit",                  null: false
    t.integer  "limit_flg",  default: 1
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.integer  "gender"
    t.date     "birthday"
    t.integer  "age"
    t.integer  "area"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
