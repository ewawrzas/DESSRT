class Dessert < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, :dessert_type, :dessert_origin, presence: true
  validates :dessert_type, :inclusion => { :in => %w(custard/pudding frozen cake cookie pie chocolate/candy pastry miscellaneous)}
  validates :dessert_origin, :inclusion => { :in => ["homemade", "store bought", "venue"] }
end
