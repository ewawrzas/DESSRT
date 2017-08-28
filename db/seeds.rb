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
sam = User.create!(username: 'sammy', password: 'starwars')
jan = User.create!(username: 'jan', password: 'starwars')
rick = User.create!(username: 'rick', password: 'starwars')
ella = User.create!(username: 'ella', password: 'starwars')
roger = User.create!(username: 'roger', password: 'starwars')
demo = User.create!(username: 'demo', password: '111111')

puts "✅"

users = [sam, jan, rick, ella, roger, demo]


print "☠️  Destroying desserts... "
Dessert.destroy_all
puts "✅"

print "📝  Seeding desserts... "



des1=  Dessert.create!(
name: "Cake",
description: "Chocolate",
image_url: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "cake",
dessert_origin: "store"
)

des2= Dessert.create!(
name: "Waffles",
description: "With raspberries",
image_url: "https://images.pexels.com/photos/221063/pexels-photo-221063.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "miscellaneous",
dessert_origin: "store"
)

des3 = Dessert.create!(
name: "Cupcake",
description: "Tiny with teal frosting",
image_url: "https://images.pexels.com/photos/112392/pexels-photo-112392.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "cake",
dessert_origin: "store"
)

des4 = Dessert.create!(
name: "Pie",
description: "Fruit",
image_url: "https://images.pexels.com/photos/79479/cake-pie-tart-fruits-79479.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "pie",
dessert_origin: "store"
)

des5 = Dessert.create!(
name: "Cake Pops",
description: "Chocolate",
image_url: "https://images.pexels.com/photos/33715/cake-pops-pastries-cake-sweet.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "cake",
dessert_origin: "store"
)

desserts = ['Cake', 'Waffles', 'Cupcake', 'Pie', 'Cake Pops']

puts "✅"

print "☠️  Destroying checkins... "
Checkin.destroy_all
puts "✅"

print "📝  Seeding checkins... "

  users.each do |user|

    checkin = Checkin.create!(
      user_id: user.id,
      comment: "Dessert (/dɪˈzɜːrt/) is a confectionery course that concludes a main meal. The course usually consists of sweet foods and beverages, such as dessert wine or liqueurs, but may include coffee, cheeses, nuts, or other savory items. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.",
      rating: 2,
      dessert_id: des1.id,
      image_url: "https://images.pexels.com/photos/33715/cake-pops-pastries-cake-sweet.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
      )
  end

puts "✅"
