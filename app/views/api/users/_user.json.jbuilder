json.extract! user, :id, :username, :image, :wall_image
json.image_url asset_path(user.image.url)
json.wall_image_url asset_path(user.wall_image.url)
