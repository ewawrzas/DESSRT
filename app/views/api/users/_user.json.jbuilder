json.extract! user, :id, :username, :image, :wall_image, :num_checkins
json.image asset_path(user.image.url)
json.wall_image asset_path(user.wall_image.url)
json.num_checkins user.num_checkins
