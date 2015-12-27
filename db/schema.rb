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

ActiveRecord::Schema.define(version: 20151220142305) do

  create_table "polls", force: :cascade do |t|
    t.string   "title",                  null: false
    t.text     "question",               null: false
    t.text     "choice01",               null: false
    t.text     "choice02",               null: false
    t.text     "choice03"
    t.text     "choice04"
    t.text     "choice05"
    t.text     "choice06"
    t.text     "choice07"
    t.text     "choice08"
    t.integer  "answer01",   default: 0, null: false
    t.integer  "answer02",   default: 0, null: false
    t.integer  "answer03",   default: 0
    t.integer  "answer04",   default: 0
    t.integer  "answer05",   default: 0
    t.integer  "answer06",   default: 0
    t.integer  "answer07",   default: 0
    t.integer  "answer08",   default: 0
    t.text     "image"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
