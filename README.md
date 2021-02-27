# Inspiration
Our inspiration was built from the social disconnect that resulted from COVID-19. We wanted to make a platform that could connect developers of all skill levels and encourage them to build upon each other's skillset. Devdir’s platform is designed to encourage developers of all skill levels to interact with each other. Whether looking for a team to join, to form connections, or to committing to a long-term project, Devdir values all users and strives to maintain a welcoming community of developers ready to collaborate.

# What It Does
DevDir works to connect developers by allowing every user to search for the skill sets that they require in their teams or projects. Our search utilizes a multi tag system to help our users find the perfect fit for their projects. We display search results one by one. Users are able to swipe left to move on, or swipe right to connect, where they’ll be able to reach out and start a conversation.

# How We Built It
For the backend infrastructure, we first designed the database tree with Firebase Realtime Database for chatrooms and profiles to store user information. Then we set up the authentication for the the app with Firebase Authentication. We also brainstormed and designed our searching algorithm to generate a list of recommended users sorted by highest priority (most skill-tag matches). In order to secure the chatroom messages, we generated a unique encrypted key for each chatroom to be identified with. The client side UI was built using React and Material-UI components. Additional styles were processed with Sass. We implemented an application level state using Redux to track all the data being passed within the application lifecycle. In the end, the app was hosted on Heroku and worked like a charm! We all found the situation where finding collaborators on project ideas relatable - we didn't know who or where to go. Hence, DevDir.

# Challenges We Ran Into
Our main challenge was synchronizing the realtime database to our clientside application.

# What We Learned
We learned about firebase cloud functions, realtime database, authentication state management, how data is circulated through a database to the clientside, application level state management, and that bugs are incredibly annoying!

# Accomplishments We're Proud Of
We are proud of our revolutionary multi-tag user search algorithm!

# What's Next for DevDir
Our future plans include getting the bugs completely fixed. We were a little disheartened when we realized that we couldn't get a fluid transition from the user's search results to an newly created chatroom, but we're going to fix it! After that, we hope to add a few more features in our profile editor such as profile pictures.

# Prizes We Are Competing For:
Best Use of Google Cloud - Use Any Google Cloud Service
Best Remote Education and Work Hack
Best Implementation and Potential for Growth

# Tech Stack
- React
- Firebase Realtime DB
- Sass
- Material-UI
- Pleeease
- Redux
