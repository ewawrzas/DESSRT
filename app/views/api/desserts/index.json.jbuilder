@desserts.each do |dessert|
  json.set! dessert.id do
    debugger
    json.extract! dessert, :id, :description, :image_url, :name, :dessert_type, :dessert_origin, :avatar_image, :avg_rating, :num_checkins, :num_users, :num_unique_users, :date_created, :checkins
    json.dessert_image_url asset_path(dessert.avatar_image.url)
  end
end
