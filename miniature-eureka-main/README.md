##Walkthrough of Challenge-11's Express.js Server Configuration
<!-- This JavaScript code sets up an Express.js server to handle requests and serve static files. -->

##Importing Required Modules
    <!-- express: Imports the Express.js framework.
    app: Creates an instance of the Express application.
    path: Provides utilities for working with file and directory paths.
    api: Imports the routes defined in the index.js file located in the routes directory. -->
    
##Setting Port Number
    <!-- Sets the port number to either the one provided in the environment variable PORT or defaults to port 3001. -->

##Middleware Configuration
    <!-- express.json(): Middleware for parsing JSON data from requests.
    express.urlencoded(): Middleware for parsing URL-encoded form data from requests.
    app.use('/api', api): Mounts the API routes defined in index.js under the /api path.
    express.static('public'): Serves static files from the public directory. -->

##Route Definitions
    <!-- Defines GET routes for the homepage (/) and the notes page (/notes).
    Uses res.sendFile() to send the corresponding HTML files located in the public directory. -->

##Server Listening
    <!-- Starts the Express server and listens on the specified port.
    Outputs a message to the console indicating that the server is running.
    This code sets up a basic Express.js server with middleware for parsing request bodies and serving static files, along with route definitions for handling different endpoints. -->

##how to get the website to show the results of my code through terminal command
<!-- $ npm start

> note-taker@1.0.0 start
> node server.js

welcome to notes
welcome to api
App listening at http://localhost:3001 -->
