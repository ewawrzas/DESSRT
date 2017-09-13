json.partial! "api/users/user", user: @user

# json.checkins do
#   json.array! @user.checkins, partial: 'api/checkins/checkin', as: :checkin
# end

json.checkins @user.checkins, partial: 'api/checkins/checkin', as: :checkin
