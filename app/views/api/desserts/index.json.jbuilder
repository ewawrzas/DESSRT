@desserts.each do |dessert|
  json.set! dessert.id do
    json.partial! 'dessert', dessert: dessert
  end
end
