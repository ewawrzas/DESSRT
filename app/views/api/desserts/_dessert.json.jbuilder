json.extract! dessert, :id, :description, :image_url, :name, :dessert_type, :dessert_origin

json.checkins do
  json.partial! 'api/checkins/checkin', collection: dessert.checkins, as: :checkin
end 
