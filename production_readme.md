# DESSRT

Based on the social drinking app Untappd, DESSRT is a full-stack web application aimed at dessert lovers looking to share their food experience with others. The app was built using Ruby on Rails and postgresSQL on the backend, with Redux serving as a state container for React.js on the frontend.


[DESSRT live](https://dessrt.herokuapp.com/#/)

## Features and Implementation

### Desserts
  Through the dessert form component, users are able to add new desserts to the database. The desserts table consists of columns for name, type, origin, ratings, and an avatar image. Amazon Web Services hosting was used as a remote asset management system to allow for large image uploads. Upon submission of the dessert form, an API call is made to store the dessert in the database. On success, the dessert form reroutes the user directly to the dessert profile page, which displays the dessert information via the virtual DOM. As users checkin to the dessert, database associations with users and checkins are leveraged to calculate statistics for each dessert, such as average rating, number of checkins and number of unique users, which are also displayed on the dessert profile page.

  ![alt text](https://github.com/ewawrzas/DESSRT/blob/master/app/assets/images/Screen%20Shot%202017-09-01%20at%201.55.03%20PM.png)

#### Desserts - Search
  Search was implemented using the pg_search gem. In the dessert model, the search scope was set to query the columns for dessert name, description and type using PostgreSQL's built in text search. The search input is found on the nav bar and redirects to a results index as seen in the image below. The results index provides users with links to each dessert's profile page, as well as a link to the add dessert form. Each index item displays the dessert avatar image, the first 35 characters of the description, and the checkin statistics.

  ![alt text](https://github.com/ewawrzas/DESSRT/blob/master/app/assets/images/search-page.png)

### Checkins

  On the database level, checkins join the users table and the desserts table. Through the checkin form on each dessert view page, users can upload an image, write a comment, and rate the dessert. Checkin items are mapped into a checkin feed component which is nested in the main presentational components of the app. Fpr dessert and user profile pages, the feeds are filtered to only show the current element's activity. On each checkin item Database level associations are utilized to display the name and profile image of both the user and dessert as links. The database association between users and checkins is also leveraged to restrict deleting functionality to the checkin author.

  Checkin form displayed as a modal on the dessert profile page:
  ![alt text](https://github.com/ewawrzas/DESSRT/blob/master/app/assets/images/Screen%20Shot%202017-09-01%20at%202.18.44%20PM.png)

### Users

  The landing page directs users to either the sign in form or sign up form, both of which are rendered by a single presentational component. Upon registration, user passwords are stored in the database as encrypted hashes produced by BCrypt. Session tokens are also randomly generated and stored in the user's cookies at the start of a new session. Backend validations require users to be signed in to access the app. Signed in users can update their accounts via the account settings form, which dispatches an API call to patch the newly inputted information to the database. Users can view other profiles, search for, create and view desserts and create and delete checkins as well.


## Future Directions for the Project

### Friendships

  With the friendships feature users will be able to add friends and curate their profile feed with posts only made by friends.

### Badges

  Users will earn badges for checking in to desserts. This feature is aimed at increasing user engagement and further motivating users to track their activity on the app.

### Search

  Once friendships are added, I plan to expand the search functionality that will allow users to look for other users. 
