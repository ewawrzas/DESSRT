@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :id, :comment, :user_id, :dessert_id, :rating
    json.image_url image_path(checkin.image_url)
  end
end