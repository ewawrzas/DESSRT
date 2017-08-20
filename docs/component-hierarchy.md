# Component Hierarchy

## App

### AuthFormContainer
 + AuthForm `connect`s to `errors`

### HomeContainer
  + Navbar `connect`s to `dessert` and `user`
  + Sidebar `connect`s to `user`
  + ReviewsIndex `connect`s to `review`

### UserProfileContainer
 + Navbar `connect`s to `new` and `user`
 + ReviewsIndex `connect`s to `review`

### DessertDetailContainer
 + Navbar `connect`s to `new` and `user`
 + ReviewsIndex `connect`s to `review`
 + CheckInForm
 + CheckInButton `connect`s to `review` and `user`

### NewDessertContainer
  + NewDessertButton `connect`s to `dessert`


# Routes

| Path                             | Component             |
| ---------------------------------|-----------------------|
| "/sign-up"                       | "AuthFormContainer"   |
| "/sign-in"                       | "AuthFormContainer"   |
| "/home"                          | "HomeContainer"       |
| "/users/userId"                  | "UserProfile"         |
| "/desserts/:dessertId"           | "DessertDetail"       |
| "/desserts/:dessertId/check-in"  | "DessertCheckIn"      |
| "/new-dessert"                   | "NewDessertContainer" |
