# Component Hierarchy

## AuthFormContainer
 + AuthForm `connect`s to `errors`

## App

* HomeContainer
  + Navbar `connect`s to `new` and `user`
  + Sidebar `connect`s to `user`
  + ReviewsIndex `connect`s to `review`

* UserProfileContainer
 + Navbar `connect`s to `new` and `user`
 + ReviewsIndex `connect`s to `review`

* DessertDetailContainer
 + Navbar `connect`s to `new` and `user`
 + ReviewsIndex `connect`s to `review`
 + CheckInContainer

* NewDessertContainer
  + NewDessertButton


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
