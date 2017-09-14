@desserts.each do |dessert|
  json.set! dessert.id do
    json.extract! dessert, :id, :description, :name, :dessert_type, :dessert_origin, :avatar_image, :avg_rating, :num_checkins, :num_users, :num_unique_users, :date_created
    json.dessert_image_url asset_path(dessert.avatar_image.url)
  end
end
