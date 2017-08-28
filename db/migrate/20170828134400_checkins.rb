class Checkins < ActiveRecord::Migration[5.1]
  def change
    create_table :checkins do |t|
      t.string :comment, null: false
      t.integer :user_id, null: false
      t.integer :dessert_id, null: false
      t.string :image_url
      t.integer :rating, null: false
      t.timestamps
    end
    add_index :checkins, :dessert_id
    add_index :checkins, :user_id
  end
end
