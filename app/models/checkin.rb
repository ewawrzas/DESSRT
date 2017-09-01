class Checkin < ApplicationRecord
  validates :user_id, :dessert_id, :comment, presence: true
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :user
  belongs_to :dessert

  image_names = ["background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg", "background6.jpg", "background7.jpg", "background8.jpg", "background9.jpg"]

  has_attached_file :image, default_url: image_names.sample
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def date_created
    created_at.asctime.split[1..2].join(" ") + " 2017"
  end

end
