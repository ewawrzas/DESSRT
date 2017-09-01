@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :id, :comment, :user_id, :dessert_id, :rating, :date_created, :image
    json.user checkin.user.username
    json.dessert checkin.dessert.name
    json.avatar image_path(checkin.user.image.url)
    json.dessert_avatar image_path(checkin.dessert.avatar_image.url)
    json.created_at checkin.date_created
    json.image image_path(checkin.image.url)
  end
end
