class Dessert < ApplicationRecord

DESSERT_TYPES = ['custard', "frozen", 'cake', 'cookie', 'pie', 'chocolate', 'pastry', 'candy', 'miscellaneous'].sort.freeze
DESSERT_ORIGINS = ["homemade", "store", "cafe", "restaurant", "other"].sort.freeze

  validates :name, presence: true, uniqueness: true
  validates :description, :dessert_type, :dessert_origin, presence: true
  validates :dessert_type, :inclusion => { :in => DESSERT_TYPES }
  validates :dessert_origin, :inclusion => { :in => DESSERT_ORIGINS }

  has_attached_file :avatar_image, default_url: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/000/000/105/original/raspberry.jpg"
  validates_attachment_content_type :avatar_image, content_type: /\Aimage\/.*\Z/

  has_many :checkins
end
