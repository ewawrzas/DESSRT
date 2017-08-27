@desserts.each do |dessert|
  json.set! dessert.id do
    json.extract! dessert, :id, :name, :dessert_type, :dessert_origin
    json.image_url image_path(dessert.image_url)
  end
end
