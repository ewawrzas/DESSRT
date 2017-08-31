json.extract! checkin, :id, :comment, :image_url, :user_id, :dessert_id, :rating, :date_created

json.user checkin.user.username
json.dessert checkin.dessert.name
json.avatar image_path(checkin.user.image.url)
json.dessert_avatar image_path(checkin.dessert.avatar_image.url)
