# Rat-to-Restaurant

![](https://media.giphy.com/media/MzJomB2lqeMYE/giphy.gif)

This weekend we'll be building a full-stack rats to restaurants web application with Node/Express and MongoDB. This will count as a graded assessment. Please review the grading rubric on Schoology and familiarize yourself with the assessment requirements.


### Setup

Two perfectly formatted json files have been provided.

**But where is that data from?**

They were obtained from NYC Open Data:
* [Restaurant Inspection Results](https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/xx67-kt59)
* [Rat Sightings](https://nycopendata.socrata.com/Social-Services/Rat-Sightings/3q43-55fe)

There is A LOT of information there. Do not try to export all the data - it is in the GB range. There is an API endpoint provided in the **EXPORT** tab:
* Restaurant API Endpoint - https://data.cityofnewyork.us/resource/xx67-kt59.json
* Rat Sightings API Endpoint - https://data.cityofnewyork.us/resource/3q43-55fe.json

But that's just the same amount of information! We can use query parameters to have it filter down the amount of data returned. For the restaurant and rats json files, the query parameters of zipcode and Incident Zip, respectively, were used with a value of 10001.

### Completion

There are 8 steps in the homework. The first 4 steps pertain to creating the back-end MVC structure. The next 4 steps pertain to building out the front-end visuals and interactivity, and cleaning up the back-end.

### Assignment

#### Part 1 - Back End

##### Step 1 - MVC Star-chitect

* Git fork the assessment repo to your own account, then Git clone the repo into your homeworks folder
* Inside the repo folder, create files and folders as necessary for MVC functionality (ok to leave empty files for now)
* There should be routers (controllers) for `rats`, `restaurants`, and `home`
* There should be models for rats and restaurants
* There should be a views folders for `home`, `rats`, and `restaurants`
* There should be an `index.ejs` for home page, an `index.ejs` and `show.ejs` for rats, and an `index.ejs` and `show.ejs` for restaurants

##### Step 2 - Middleware

* npm init (inside the project folder)
* In `server.js` or whatever you called your main Node.js file, set up Express and middleware
* Connect `server.js` to your controllers
* Set up middleware in your routers, and connect to models

##### Step 3 - Route 66

The following routes should render a corresponding **view** (these views can be empty for now):
* `/`
* `/rats`
* `/rats/show`
* `/restaurants`
* `/restaurants/show`

##### Step 4 - Data Based

* Import the JSON files to appropriately named Mongo collections

  *For example, `mongoimport --db rats_to_restaurants --collection rats --drop --file rats.json --jsonArray`
  *Repeat for restaurants.json, changing names where necessary
* Write your `rats.js` and `restaurants.js` models to access data from your new database
* Each model should be able to filter based on at least two keys in the respective JSON files
* Each model should be able to search MongoDB based on a query from a form (i.e. open weather search)
* Write out a filter function for each model, using at least two keys in the respective JSON files
* To test if your models are working, change your routes to res.json instead of res.render.

At this point you should have a Node app initialized and all the necesary dependencies installed, directories created, and server set up.

#### Part 2 - Front End

Use CSS to style your front end and feel free to use flexbox for layout and responsiveness

##### Step 5 - Home is where the heart is

* Let's build out our home page
* Find a free and relevant image resource to act as the background of our homepage. Save it to an image folder in public
* What are the different options for backgrounds in CSS? How can we get it to stretch to fit the page?
* In the middle of the page, there should be an opaque section that contains an app name, link to `/rats` and a link to `/restaurants`. This section should be horizontally and vertically centered! (hint - if the section has a defined height in terms of vh/viewheight, how can we edit margin: 0 auto)

##### Step 6 - Form-ation

* Let's build our index pages for both `/rats` and `/restaurants`
* The bodies for these pages should be gradients and/or animations
* There should be an opaque container with a responsive width and a height dependent on viewheight
* At the top of this section, there should be a brief header of how the form works and what it will return
* Underneath that text, there should be a form containing a series of inputs and a search button
 * The search button will submit the `form` with an `action` that hits your `/rats/show` or `/restaurants/show` routes
 * The inputs are up to you! There should be at least two, and the `name` attributes should correspond to keys in the JSON files
* Once the user hits submit, the server should render the `show.ejs` view with data from the appropriate model. Set up `show.ejs` with EJS templating to display that data.
* There's a LOT of data that will be returned - specify a height for `show.ejs` and implement [overflow-y](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y)!

##### Step 7 - EJS Templating

* Assume you will receive an array of results from your model. Use EJS templating to display this data to the page.
* Use a .forEach method to iterate through the data and display the information formatted with HTML.

##### Step 8 - Styles Change, Style Doesn't

* `show.ejs` probably doesn't look too great just yet. Let's make it look like [cards](http://babich.biz/content/images/2016/03/1-qW3Z7Wol3s7-w1fgSxEh_A.jpeg)
* Use CSS and classes to format the responses to have:
 * Border
 * Different color from response section
 * Formatted text
 * Box Shadow (find a CSS generator online!)