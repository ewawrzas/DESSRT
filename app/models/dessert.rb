class Dessert < ApplicationRecord

DESSERT_TYPES = ['custard', "frozen", 'cake', 'cookie', 'pie', 'chocolate', 'pastry', 'miscellaneous'].sort.freeze
DESSERT_ORIGINS = ["homemade", "store", "cafe", "other"].sort.freeze

  validates :name, presence: true, uniqueness: true
  validates :description, :dessert_type, :dessert_origin, presence: true
  validates :dessert_type, :inclusion => { :in => DESSERT_TYPES }
  validates :dessert_origin, :inclusion => { :in => DESSERT_ORIGINS }
end
