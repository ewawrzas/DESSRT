json.extract! checkin, :id, :comment, :image_url, :user_id, :dessert_id, :rating

json.user checkin.user.username
json.avatar image_path(checkin.user.image.url)
