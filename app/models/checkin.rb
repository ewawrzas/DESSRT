class Checkin < ApplicationRecord
  validates :user_id, :dessert_id, :comment, presence: true
  validates :rating, inclusion: { in: (1..5) }
  # validates_attachment :image, allow_nil: true


  belongs_to :user
  belongs_to :dessert

  has_attached_file :image, default_url: 'default.png'
  validates_attachment :image, allow_nil: true
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  def date_created
    created_at.asctime.split[1..2].join(" ") + " 2017"
  end

end
