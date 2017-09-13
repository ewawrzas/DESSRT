json.extract! user, :id, :username, :image, :wall_image, :num_checkins, :checkins
json.image asset_path(user.image.url)
json.wall_image user.wall_image.url(:large)
json.num_checkins user.num_checkins
json.checkins user.checkins
