# DESSRT

Based on the social drinking app Untappd, DESSRT is a full-stack web application aimed at dessert lovers. The app was built using Ruby on Rails and postgresSQL on the backend, with Redux serving as a state container for React.js on the frontend.


[DESSRT live](https://dessrt.herokuapp.com/#/)

## Features and Implementation

### Add and view desserts
  Through the dessert form component, users are able to add desserts to the database. Amazon Web Services hosting was used to allow for image uploads and remote asset management. Upon creation, the dessert form redirects to the dessert profile page, which displays the dessert information as well as the checkin feed available from the nested checkin component. Database associations were leveraged to calculate statistics for each dessert, such as average rating, number of checkins and number of unique users.

  ![alt text](https://github.com/ewawrzas/DESSRT/blob/master/app/assets/images/Screen%20Shot%202017-09-01%20at%2011.42.39%20AM.png)

### Checkins

  On the database level, checkins join the users and desserts tables, as users are able to check in to individual desserts via the checkin link on each dessert profile page. Through the checkin form, users can upload an image, write a comment, and rate the dessert. Checkin items are mapped into a checkin feed component which is nested in the home page component as well as both user and dessert profile components. Database level associations are utilized to display the name and profile image of both the user and dessert as links on each checkin. The database association between users and checkins was also leveraged to restrict deleting functionality to the checkin author.

  ![alt text](https://github.com/ewawrzas/DESSRT/blob/master/app/assets/images/Screen%20Shot%202017-09-01%20at%2011.34.40%20AM.png)

### User profiles

  When signed in, users can update their accounts by navigating to the account settings form. 


## Future Directions for the Project

### Search

  I plan to implement search functionality that will allow users to look for a specific dessert or user.  

### Friendships

  With the friendships feature users will be able to add friends and curate their global feed with posts only made by friends.
