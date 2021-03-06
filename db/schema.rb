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

ActiveRecord::Schema.define(version: 20170901015331) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "checkins", force: :cascade do |t|
    t.string "comment", null: false
    t.integer "user_id", null: false
    t.integer "dessert_id", null: false
    t.string "image_url"
    t.integer "rating", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["dessert_id"], name: "index_checkins_on_dessert_id"
    t.index ["user_id"], name: "index_checkins_on_user_id"
  end

  create_table "desserts", force: :cascade do |t|
    t.string "description", null: false
    t.string "image_url"
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "dessert_type"
    t.string "dessert_origin"
    t.string "avatar_image_file_name"
    t.string "avatar_image_content_type"
    t.integer "avatar_image_file_size"
    t.datetime "avatar_image_updated_at"
    t.index ["name"], name: "index_desserts_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.string "wall_image_file_name"
    t.string "wall_image_content_type"
    t.integer "wall_image_file_size"
    t.datetime "wall_image_updated_at"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
