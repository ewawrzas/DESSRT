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
babs = User.create!(username: 'Babs', password: 'starwars', image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/barbie2.jpg", wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background1.jpg")
lisa = User.create!(username: 'Lisa', password: 'starwars', image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/barbie2.jpg", wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background2.jpg")
rascal = User.create!(username: 'rascal', password: 'starwars', image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/barbie2.jpg", wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background3.jpg")
ella = User.create!(username: 'ella', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/cat.jpeg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background4.jpg")
roger = User.create!(username: 'roger', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/cat.jpeg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background5.jpg")

robert = User.create!(username: 'Robert', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/cat.jpeg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background6.jpg")
jamoy = User.create!(username: 'Jamoy', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/cat.jpeg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background7.jpg")
justin = User.create!(username: 'Justin', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/barbie.jpg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background7.jpg")
jarelly = User.create!(username: 'Jarelly', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/barbie.jpg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background1.jpg")
coffeelvr = User.create!(username: 'coffeelvr', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/barbie.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blueberry.jpg')

rob = User.create!(username: 'Rob', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/elvis.jpeg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blueberry.jpg')
moy = User.create!(username: 'Moy', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/elvis.jpeg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background6.jpg")
lola = User.create!(username: 'Lola', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/elvis.jpeg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background5.jpg")
marie = User.create!(username: 'Marie', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/profile3.jpeg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blurrypinkcupcakes.jpg")
silvia = User.create!(username: 'Silvia', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/profile3.jpeg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background4.jpg")

coffee = User.create!(username: 'coffee', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/profile3.jpeg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background1.jpg")
cookiemonster = User.create!(username: 'cookiemonster', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic.jpg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background2.jpg")
bikelvr = User.create!(username: 'bikelvr', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic.jpg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background3.jpg")
chocolvr = User.create!(username: 'chocolvr', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blueberry.jpg')
countchocula = User.create!(username: 'countchocula', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic2.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blueberry.jpg')

margie = User.create!(username: 'Margie', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic2.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/raspberry.jpg')
laura = User.create!(username: 'Laura', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic2.jpg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background9.jpg")
keniel = User.create!(username: 'Keniel', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic3.jpb.jpg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blurrypinkcupcakes.jpg")
javonte = User.create!(username: 'Javonte', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic3.jpb.jpg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background1.jpg")
rosa = User.create!(username: 'Rosa', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic3.jpb.jpg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background3.jpg")

ellz = User.create!(username: 'Ellz', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic4.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/macaroons2.png')
emre = User.create!(username: 'Emre', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic4.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/macaroons2.png')
walt = User.create!(username: 'Walt', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic4.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/macaroons.jpg')
devin = User.create!(username: 'Devin', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic5.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/macaroons.jpg')
cliff = User.create!(username: 'cliff', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic5.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blueberry.jpg')

suz = User.create!(username: 'Suz', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/profilepic5.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/whitecupcakes.jpg')
sal = User.create!(username: 'Sal', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/the-martha-stewart-show-profile.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/whitecupcakes.jpg')
roscoe = User.create!(username: 'roscoe', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/the-martha-stewart-show-profile.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/macaroons2.png')
victor = User.create!(username: 'victor', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/the-martha-stewart-show-profile.jpg', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blueberry.jpg')
sabby = User.create!(username: 'sabby', password: 'starwars', image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/the-martha-stewart-show-profile.jpg', wall_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blurrypinkcupcakes.jpg")
demo = User.create!(username: 'demo', password: '111111', wall_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/raspberry.jpg')

puts "✅"

users = User.all


print "☠️  Destroying desserts... "
Dessert.destroy_all
puts "✅"

print "📝  Seeding desserts... "



des1=  Dessert.create!(
name: "Fruit Tarts",
description: "A tart is a baked dish consisting of a filling over a pastry base with an open top not covered with pastry. The pastry is usually shortcrust pastry; the filling may be sweet or savoury, though modern tarts are usually fruit-based, sometimes with custard",
dessert_type: "pastry",
dessert_origin: "homemade",
avatar_image: "https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background2.jpg"
)

des2= Dessert.create!(
name: "Berry Pie",
description: "A pie is a baked dish which is usually made of a pastry dough casing that covers or completely contains a filling of various sweet or savoury ingredients.",
dessert_type: "pie",
dessert_origin: "store",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background3.jpg'
)

des3 = Dessert.create!(
name: "Chocolate Chip Cookie",
description: "The dough is probably my favorite food. I could eat these all day. A cookie is a baked or cooked good that is small, flat and sweet. It usually contains flour, sugar and some type of oil or fat.",
dessert_type: "cookie",
dessert_origin: "cafe",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background6.jpg'
)

des4 = Dessert.create!(
name: "Ice Cream",
description: "The best food ever! There are so many varieties and toppings to choose from!",
dessert_type: "frozen",
dessert_origin: "restaurant",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background4.jpg'
)

des5 = Dessert.create!(
name: "Chocolates",
description: "Chocolate has become one of the most popular food types and flavors in the world, and a vast number of foodstuffs involving chocolate have been created, particularly desserts including cakes, pudding, mousse, chocolate brownies, and chocolate chip cookies. ",
dessert_type: "chocolate",
dessert_origin: "store",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background5.jpg'
)

des6=  Dessert.create!(
name: "Meringue Cookies",
description: "The world’s best cookie. According to my grandma.",
dessert_type: "cookie",
dessert_origin: "homemade",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/toa-heftiba-288450.jpg'
)

des7= Dessert.create!(
name: "Pudding Pops",
description: "Cold and chocolate!",
dessert_type: "frozen",
dessert_origin: "homemade",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background7.jpg'
)

des9 = Dessert.create!(
name: "Macaroons",
description: "Small round cookies with cream in the center.",
dessert_type: "cookie",
dessert_origin: "store",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background8.jpg'
)

des10 = Dessert.create!(
name: "Angel Food Cake",
description: "Fresh Ponchatoulla strawberries and melon slices are the topping to this heavenly dessert.",
dessert_type: "cake",
dessert_origin: "restaurant",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/toa-heftiba-134256.jpg'
)

des11=  Dessert.create!(
name: "Blueberry Cobbler",
description: "Blueberries, cinnamon, butter and nutmeg make this cobbler stick to ya ribs!!",
dessert_type: "pastry",
dessert_origin: "homemade",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/blueberry.jpg'
)

des12= Dessert.create!(
name: "Lemon Bar",
description: "Sugary lemon flavored dessert bar.",
dessert_type: "pastry",
dessert_origin: "cafe",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/toa-heftiba-222353.jpg'
)

des14 = Dessert.create!(
name: "Brownie",
description: "Full of fudge and butter!",
dessert_type: "miscellaneous",
dessert_origin: "restaurant",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background9.jpg'
)

des16=  Dessert.create!(
name: "Raspberry Cake",
description: "August is raspberry season!",
dessert_type: "cake",
dessert_origin: "homemade",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/raspberry.jpg'
)

des18 = Dessert.create!(
name: "Fruity Ice Cream",
description: "Cold fruit based dessert.",
dessert_type: "frozen",
dessert_origin: "store",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/background4.jpg'
)

des19 = Dessert.create!(
name: "Birthday Cake",
description: "Made with eggs, milk, and butter. Best with some vanilla and almond seasoning.",
dessert_type: "cake",
dessert_origin: "restaurant",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/cake.jpg'
)

des20 = Dessert.create!(
name: "Cupcake",
description: "Like small cakes. Good for birthdays.",
dessert_type: "cake",
dessert_origin: "cafe",
avatar_image: 'https://s3.us-east-2.amazonaws.com/dessrt-dev/desserts/avatar_images/whitecupcakes.jpg'
)

desserts = Dessert.all

comments = ["A little too tangy for my taste...", "OK but it needs more sugar.", "Great for breakfast, lunch and dinner", "Enjoying my favorite homemade specialty!", "Having a treat!", "Don't judge me!", "Third dessert today!", "It's my birthday! I can eat whatever I want", "I think this is the best food ever!", "Just like my mom used to make", "What a treat!", "yuck", "It looks nice, but tastes like sandpaper.", "Take a picture and throw it away.", "meh"]

puts "✅"

print "☠️  Destroying checkins... "
Checkin.destroy_all
puts "✅"



print "📝  Seeding checkins... "

  users.each do |user|

    checkin = Checkin.create!(
      user_id: user.id,
      comment: comments.sample,
      dessert_id: desserts.sample.id,
      image_url: "https://images.pexels.com/photos/33715/cake-pops-pastries-cake-sweet.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
      rating: (1..5).to_a.sample
      )

  end

puts "✅"
