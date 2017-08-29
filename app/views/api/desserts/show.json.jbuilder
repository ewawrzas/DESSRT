json.partial! 'api/desserts/dessert', dessert: @dessert

json.checkins do
  json.array! @dessert.checkins, partial: 'api/checkins/checkin', as: :checkin
end
