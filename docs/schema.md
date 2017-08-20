# Schema

## users

| Column Name     | Data Type | Details                   |
| ----------------|-----------| --------------------------|
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |


## reviews

| Column Name | Data Type | Details                                              |
| ------------|-----------| -----------------------------------------------------|
| id          | integer   | not null, primary key                                |
| body        | string    | not null                                             |
| reviewer_id | integer   | not null, foreign key (references users), indexed    |
| dessert_id  | integer   | not null, foreign key (references desserts), indexed |                  
| image_url   | string    |                                                      |
| rating      | integer   |                                                      |


## desserts

| Column Name | Data Type | Details                                              |
| ------------|-----------| -----------------------------------------------------|
| id          | integer   | not null, primary key                                |
| description | string    | not null                                             |
| review_id   | integer   | not null, foreign key (references reviews), indexed  |                  
| image_url   | string    |                                                      |
| name        | string    | not null, unique                                     |
| category    | string    |
