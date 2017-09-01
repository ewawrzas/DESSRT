# DESSRT

Based on the social drinking app Untappd, DESSRT is a full-stack web application aimed at dessert lovers. The app was built using Ruby on Rails and postgresSQL on the backend, with Redux serving as a state container for React.js on the frontend.


[DESSRT live](https://dessrt.herokuapp.com/#/)

## Features and Implementation

### Add and view desserts
  Through the dessert form component, users are able to add new desserts to the database. The desserts table consists of columns for name, type, origin, ratings, and an avatar image. Amazon Web Services hosting was used as a remote asset management system to allow for large image uploads. Upon submission of the dessert form, an API call is made to store the dessert in the database. On success, the dessert form reroutes the user directly to the dessert profile page, which displays the dessert information. Database associations with users and checkins are leveraged to calculate statistics for each dessert, such as average rating, number of checkins and number of unique users, which are displayed on the dessert profile page.

  ![alt text]

### Checkins

  On the database level, checkins join the users and desserts tables. Through the checkin form on each dessert view page, users can upload an image, write a comment, and rate the dessert. Checkin items are mapped into a checkin feed component. The checkin feed is nested in the home page component as well as both user and dessert profile components. Database level associations are utilized to display the name and profile image of both the user and dessert as links on each checkin. The database association between users and checkins was also leveraged to restrict deleting functionality to the checkin author.

  ![alt text]

### Users

  Backend validations require users to be signed in to access the app. Signed in users can update their profiles and view other user profiles.


## Future Directions for the Project

### Search

  I plan to implement search functionality that will allow users to look for a specific dessert or user. Search will be nested in the Nav Bar and

### Friendships

  With the friendships feature users will be able to add friends and curate their global feed with posts only made by friends.
