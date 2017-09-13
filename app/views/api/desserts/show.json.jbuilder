json.partial! 'api/desserts/dessert', dessert: @dessert

json.checkins @dessert.checkins, partial: 'api/checkins/checkin', as: :checkin
