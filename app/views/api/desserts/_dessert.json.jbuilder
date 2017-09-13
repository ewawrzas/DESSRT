json.extract! dessert, :id, :description, :image_url, :name, :dessert_type, :dessert_origin, :avatar_image, :avg_rating, :num_checkins, :num_users, :num_unique_users, :date_created, :checkins
json.dessert_avatar dessert.avatar_image.url(:medium)

json.checkins dessert.checkins

# json.checkins do
#   json.partial! 'api/checkins/checkin', collection: dessert.checkins, as: :checkin
# end
