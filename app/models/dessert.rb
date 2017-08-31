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

  def avg_rating
    average = []
    return 0 if checkins.length == 0
    checkins.each do |checkin|
      average << checkin.rating
    end
    average.reduce(:+) / average.length
  end

  def num_checkins
    checkins.length
  end

  def num_users
    users = []
    checkins.each do |checkin|
      users << checkin.user
    end
    users.length
  end

  def num_unique_users
    users = []
    checkins.each do |checkin|
      users << checkin.user
    end
    users.uniq.length
  end

  def date_created
    created_at.asctime.split[1..2].join(" ") + " 2017"
  end

end
