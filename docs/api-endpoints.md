# API Endpoints

## HTML API
### Root
+ `GET` / - loads React web app

## JSON API

### Users
+ `POST` /api/users
+ `PATCH` /api/users
+ `GET` /api/user/:id
+ `GET` /api/users/:id/checkins
  * index of all checkins for a user

### Session
+ `POST` /api/session
+ `DELETE` /api/session

### Dessert
+ `POST` /api/desserts
+ `GET` /api/desserts/:id
+ `GET` /api/desserts/:id/checkins
  * index of all checkins for a dessert

### Checkin
+ `POST` /api/checkins
+ `PATCH` /api/checkins/:id
+ `DELETE` /api/checkins/:id
