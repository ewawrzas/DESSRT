class ChangeDessertsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :desserts, :dessert_type, :string
    add_column :desserts, :dessert_origin, :string
  end

end
