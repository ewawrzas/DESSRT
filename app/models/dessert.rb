class Dessert < ApplicationRecord
include PgSearch

pg_search_scope :search_any_word,
  against: [:name, :dessert_type, :description],
  using: { tsearch: { any_word: true } }

DESSERT_TYPES = ['custard', "frozen", 'cake', 'cookie', 'pie', 'chocolate', 'pastry', 'candy', 'miscellaneous'].sort.freeze
DESSERT_ORIGINS = ["homemade", "store", "cafe", "restaurant", "other"].sort.freeze

image_names = ["background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg", "background6.jpg", "background7.jpg", "background8.jpg", "background9.jpg"]

  validates :name, presence: true, uniqueness: true
  validates :description, :dessert_type, :dessert_origin, presence: true
  validates :dessert_type, :inclusion => { :in => DESSERT_TYPES }
  validates :dessert_origin, :inclusion => { :in => DESSERT_ORIGINS }

  has_attached_file :avatar_image, styles: { large: "135x", small: "40x", medium: "80x"}, default_url: image_names.sample
  validates_attachment_content_type :avatar_image, content_type: /\Aimage\/.*\Z/
  validates_attachment allow_nil: true

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
