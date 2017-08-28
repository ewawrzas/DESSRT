class Checkin < ApplicationRecord
  validates :user_id, :dessert_id, :comment, presence: true
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :user
  belongs_to :dessert
end
