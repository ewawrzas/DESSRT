# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dessert.delete_all

Dessert.create!(
name: "Cake",
description: "Chocolate",
image_url: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "cake",
dessert_origin: "store bought"
)

Dessert.create!(
name: "Waffles",
description: "With raspberries",
image_url: "https://images.pexels.com/photos/221063/pexels-photo-221063.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "miscellaneous",
dessert_origin: "store bought"
)

Dessert.create!(
name: "Cupcake",
description: "Tiny with teal frosting",
image_url: "https://images.pexels.com/photos/112392/pexels-photo-112392.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "cake",
dessert_origin: "store bought"
)

Dessert.create!(
name: "Pie",
description: "Fruit",
image_url: "https://images.pexels.com/photos/79479/cake-pie-tart-fruits-79479.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "pie",
dessert_origin: "store bought"
)

Dessert.create!(
name: "Cake Pops",
description: "Chocolate",
image_url: "https://images.pexels.com/photos/33715/cake-pops-pastries-cake-sweet.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
dessert_type: "cake",
dessert_origin: "store bought"
)
