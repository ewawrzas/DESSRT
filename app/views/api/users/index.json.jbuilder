@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :image, :wall_image
    json.image_url asset_path(user.image.url)
    json.wall_image_url asset_path(user.wall_image.url)
    json.partial! "user", user: user
  end
end
