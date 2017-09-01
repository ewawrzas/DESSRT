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
babs = User.create!(username: 'Babs', password: 'starwars')
lisa = User.create!(username: 'Lisa', password: 'starwars')
rascal = User.create!(username: 'rascal', password: 'starwars')
ella = User.create!(username: 'ella', password: 'starwars')
roger = User.create!(username: 'roger', password: 'starwars')

robert = User.create!(username: 'Robert', password: 'starwars')
jamoy = User.create!(username: 'Jamoy', password: 'starwars')
justin = User.create!(username: 'Justin', password: 'starwars')
jarelly = User.create!(username: 'Jarelly', password: 'starwars')
coffeelvr = User.create!(username: 'coffeelvr', password: 'starwars')

rob = User.create!(username: 'Rob', password: 'starwars')
moy = User.create!(username: 'Moy', password: 'starwars')
lola = User.create!(username: 'Lola', password: 'starwars')
marie = User.create!(username: 'Marie', password: 'starwars')
silvia = User.create!(username: 'Silvia', password: 'starwars')

coffee = User.create!(username: 'coffee', password: 'starwars')
cookiemonster = User.create!(username: 'cookiemonster', password: 'starwars')
bikelvr = User.create!(username: 'bikelvr', password: 'starwars')
chocolvr = User.create!(username: 'chocolvr', password: 'starwars')
countchocula = User.create!(username: 'countchocula', password: 'starwars')

margie = User.create!(username: 'Margie', password: 'starwars')
laura = User.create!(username: 'Laura', password: 'starwars')
keniel = User.create!(username: 'Keniel', password: 'starwars')
javonte = User.create!(username: 'Javonte', password: 'starwars')
rosa = User.create!(username: 'Rosa', password: 'starwars')

ellz = User.create!(username: 'Ellz', password: 'starwars')
emre = User.create!(username: 'Emre', password: 'starwars')
walt = User.create!(username: 'Walt', password: 'starwars')
devin = User.create!(username: 'Devin', password: 'starwars')
cliff = User.create!(username: 'cliff', password: 'starwars')

suz = User.create!(username: 'Suz', password: 'starwars')
sal = User.create!(username: 'Sal', password: 'starwars')
roscoe = User.create!(username: 'roscoe', password: 'starwars')
victor = User.create!(username: 'victor', password: 'starwars')
sabby = User.create!(username: 'sabby', password: 'starwars')
demo = User.create!(username: 'demo', password: '111111')

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
dessert_origin: "homemade"
)

des2= Dessert.create!(
name: "Berry Pie",
description: "A pie is a baked dish which is usually made of a pastry dough casing that covers or completely contains a filling of various sweet or savoury ingredients.",
dessert_type: "pie",
dessert_origin: "store"
)

des3 = Dessert.create!(
name: "Chocolate Chip Cookie",
description: "The dough is probably my favorite food. I could eat these all day. A cookie is a baked or cooked good that is small, flat and sweet. It usually contains flour, sugar and some type of oil or fat.",
dessert_type: "cookie",
dessert_origin: "cafe"
)

des4 = Dessert.create!(
name: "Ice Cream",
description: "The best food ever! There are so many varieties and toppings to choose from!",
dessert_type: "frozen",
dessert_origin: "restaurant"
)

des5 = Dessert.create!(
name: "Chocolates",
description: "Chocolate has become one of the most popular food types and flavors in the world, and a vast number of foodstuffs involving chocolate have been created, particularly desserts including cakes, pudding, mousse, chocolate brownies, and chocolate chip cookies. ",
dessert_type: "chocolate",
dessert_origin: "store"
)

des6=  Dessert.create!(
name: "Gingerbread",
description: "The world’s largest gingerbread house topped out at 2,520 square feet and contained 35.8 million calories.",
dessert_type: "cookie",
dessert_origin: "homemade"
)

des7= Dessert.create!(
name: "Chocolate Pie",
description: "As of 2010, Armenia holds the title for the world’s biggest chocolate bar, which weighed over 9,000 pounds.",
dessert_type: "chocolate",
dessert_origin: "store"
)

des8 = Dessert.create!(
name: "Candy Corn",
description: "Yellow orange and white. Great for Halloween! It's almost as good for you as real corn.",
dessert_type: "cookie",
dessert_origin: "cafe"
)

des9 = Dessert.create!(
name: "Ice Cream Sandwich",
description: "Not like a regular sandwich. This one has ice cream in it and the bread is made of choclate.",
dessert_type: "frozen",
dessert_origin: "store"
)

des10 = Dessert.create!(
name: "Angel Food Cake",
description: "Fresh Ponchatoulla strawberries and melon slices are the topping to this heavenly dessert.",
dessert_type: "cake",
dessert_origin: "restaurant"
)

des11=  Dessert.create!(
name: "Apple Cobbler",
description: "Apples, cinnamon, butter and nutmeg make this cobbler stick to ya ribs!!",
dessert_type: "pastry",
dessert_origin: "homemade"
)

des12= Dessert.create!(
name: "Biscotti",
description: "The Italians do dessert right! This is a hard cookie, flavored with almonds and plenty of sugar!",
dessert_type: "cookie",
dessert_origin: "cafe"
)

des13 = Dessert.create!(
name: "Pecan Pie",
description: "Mammoth toasted pecan halves layered ia an intoxicating filling mellowed with the rich, smooth flavor of Jim Beam Bourbon.... then nestled in our buttery crust..",
dessert_type: "pie",
dessert_origin: "restaurant"
)

des14 = Dessert.create!(
name: "Brownie",
description: "Full of fudge and butter!",
dessert_type: "miscellaneous",
dessert_origin: "restaurant"
)

des15 = Dessert.create!(
name: "Crepes",
description: "Best with nutella and strawberries!",
dessert_type: "miscellaneous",
dessert_origin: "restaurant"
)

des16=  Dessert.create!(
name: "Blueberry Cake",
description: "August is blueberry season!",
dessert_type: "cake",
dessert_origin: "homemade"
)

des17= Dessert.create!(
name: "Donut",
description: "Plain, chocolate, jellyfilled, glazed.",
dessert_type: "pie",
dessert_origin: "store"
)

des3 = Dessert.create!(
name: "Chocolate Chip Cookie",
description: "The dough is probably my favorite food. I could eat these all day. A cookie is a baked or cooked good that is small, flat and sweet. It usually contains flour, sugar and some type of oil or fat.",
dessert_type: "cookie",
dessert_origin: "cafe"
)

des4 = Dessert.create!(
name: "Ice Cream",
description: "The best food ever! There are so many varieties and toppings to choose from!",
dessert_type: "frozen",
dessert_origin: "restaurant"
)

des5 = Dessert.create!(
name: "Chocolates",
description: "Chocolate has become one of the most popular food types and flavors in the world, and a vast number of foodstuffs involving chocolate have been created, particularly desserts including cakes, pudding, mousse, chocolate brownies, and chocolate chip cookies. ",
dessert_type: "chocolate",
dessert_origin: "store"
)



puts "✅"

print "☠️  Destroying checkins... "
Checkin.destroy_all
puts "✅"



print "📝  Seeding checkins... "

  users.each do |user|

    checkin = Checkin.create!(
      user_id: user.id,
      comment: "Enjoying my favorite homemade specialty!",
      dessert_id: des1.id,
      image_url: "https://images.pexels.com/photos/33715/cake-pops-pastries-cake-sweet.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
      rating: 3
      )

  end

puts "✅"
