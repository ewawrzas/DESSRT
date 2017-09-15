@desserts.each do |dessert|
  json.set! dessert.id do
    json.extract! dessert, :id, :description, :name, :dessert_type, :dessert_origin, :avatar_image, :avg_rating, :num_checkins, :num_users, :num_unique_users, :date_created, :checkins
    json.dessert_image_url dessert.avatar_image.url(:large)
    json.checkins dessert.checkins
  end
end
