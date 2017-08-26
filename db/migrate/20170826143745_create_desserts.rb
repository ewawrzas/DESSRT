class CreateDesserts < ActiveRecord::Migration[5.1]
  def change
    create_table :desserts do |t|
      t.string :description, null: false
      t.string :image_url
      t.string :name, null: false
      t.timestamps
    end
    add_index :desserts, :name, unique: true
  end
end
