# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



print "☠️  Destroying users... "
User.destroy_all
puts "✅"

print "📝  Seeding users... "
babs = User.create!(username: 'Babs', password: 'starwars', image: 'barbie.png', wall_image: 'goldencupcakes.png')
lisa = User.create!(username: 'Lisa', password: 'starwars', image: 'profile1.jpg', wall_image: 'blueberry.jpg')
rascal = User.create!(username: 'rascal', password: 'starwars', image: 'profile2.jpg', wall_image: 'raspberry.jpg')
ella = User.create!(username: 'ella', password: 'starwars', image: 'cat.jpg', wall_image: 'brightmacaroons.jpg')
roger = User.create!(username: 'roger', password: 'starwars', image: 'elvis.jpg', wall_image: 'whitecupcakes.jpg')
demo = User.create!(username: 'demo', password: '111111', image: 'profile3.jpg', wall_image: 'background1.jpg')

puts "✅"

users = [sam, jan, rick, ella, roger, demo]


print "☠️  Destroying desserts... "
Dessert.destroy_all
puts "✅"

print "📝  Seeding desserts... "



des1=  Dessert.create!(
name: "Fruit Tarts",
description: "A tart is a baked dish consisting of a filling over a pastry base with an open top not covered with pastry. The pastry is usually shortcrust pastry; the filling may be sweet or savoury, though modern tarts are usually fruit-based, sometimes with custard",
dessert_type: "pastry",
dessert_origin: "homemade",
avatar_image: 'background2'
)

des2= Dessert.create!(
name: "Berry Pie",
description: "A pie is a baked dish which is usually made of a pastry dough casing that covers or completely contains a filling of various sweet or savoury ingredients.",
dessert_type: "pie",
dessert_origin: "store",
avatar_image: 'background3'
)

des3 = Dessert.create!(
name: "Chocolate Chip Cookie",
description: "The dough is probably my favorite food. I could eat these all day. A cookie is a baked or cooked good that is small, flat and sweet. It usually contains flour, sugar and some type of oil or fat.",
dessert_type: "cookie",
dessert_origin: "cafe",
avatar_image: 'background6'
)

des4 = Dessert.create!(
name: "Ice Cream",
description: "The best food ever! There are so many varieties and toppings to choose from!",
dessert_type: "frozen",
dessert_origin: "restaurant",
avatar_image: 'background4'
)

des5 = Dessert.create!(
name: "Chocolates",
description: "Chocolate has become one of the most popular food types and flavors in the world, and a vast number of foodstuffs involving chocolate have been created, particularly desserts including cakes, pudding, mousse, chocolate brownies, and chocolate chip cookies. ",
dessert_type: "chocolate",
dessert_origin: "store",
avatar_image: 'background5'
)



puts "✅"

print "☠️  Destroying checkins... "
Checkin.destroy_all
puts "✅"

print "📝  Seeding checkins... "

  users.each do |user|

    checkin = Checkin.create!(
      user_id: user.id,
      comment: "Enjoying my favorite homemade specialty!"
      dessert_id: des1.id,
      image_url: "https://images.pexels.com/photos/33715/cake-pops-pastries-cake-sweet.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
      )

  end

puts "✅"
