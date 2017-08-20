# Schema

## users

| Column Name     | Data Type | Details                   |
| ----------------|-----------| --------------------------|
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |


## checkin

| Column Name | Data Type | Details                                              |
| ------------|-----------| -----------------------------------------------------|
| id          | integer   | not null, primary key                                |
| comment     | string    | not null                                             |
| user_id     | integer   | not null, foreign key (references users), indexed    |
| dessert_id  | integer   | not null, foreign key (references desserts), indexed |                  
| image_url   | string    |                                                      |
| rating      | integer   |                                                      |


## desserts

| Column Name | Data Type | Details                                              |
| ------------|-----------| -----------------------------------------------------|
| id          | integer   | not null, primary key                                |
| description | string    | not null                                             |
| checkin_id  | integer   | not null, foreign key (references checkins), indexed |                  
| image_url   | string    |                                                      |
| name        | string    | not null, unique                                     |
| category    | string    |
