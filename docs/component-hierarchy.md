# Component Hierarchy

## App

### AuthFormContainer
 + AuthForm `connect`s to `errors`

### HomeContainer
  + Navbar `connect`s to `dessert` and `user`
  + Sidebar `connect`s to `user`
  + CheckinsIndex `connect`s to `checkin`

### UserProfileContainer
 + Navbar `connect`s to `new` and `user`
 + CheckinsIndex `connect`s to `checkins`

### DessertDetailContainer
 + Navbar `connect`s to `new` and `user`
 + CheckinsIndex `connect`s to `checkins`
 + CheckInForm
 + CheckInButton `connect`s to `checkins` and `user`

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
