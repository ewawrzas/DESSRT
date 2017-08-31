class Checkin < ApplicationRecord
  validates :user_id, :dessert_id, :comment, presence: true
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :user
  belongs_to :dessert

  def date_created
    created_at.asctime.split[1..2].join(" ") + " 2017"
  end

end
