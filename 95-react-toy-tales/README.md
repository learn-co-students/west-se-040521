# Toy Tales

You've got a friend in need! Again!
Andy has misplaced of his toys (again) and need your help to organize them.

All the information about Andy's toys can be found in the 'db.json' file, which you will need to fire up, using the following command in your terminal:

`json-server --watch db.json`

Before you start building out the application, the first step that you should take is to draw out your app hierarchy. This will tell you how components can speak to each other as well as where that information should be stored.

After drawing out the app hierarchy, you should hook up the data from the 'db.json' file to your React components, using fetch. Given your component tree, think about which component should be responsible for the array. After you have put the data in the proper component, your next job is to render the ToyCard component on the page.

After the ToyCard components are on the page, consider building out the functionality for the ToyForm. Using the ideas of controlled form and inverse data-flow, think about how to render a new ToyCard for the toy that you created.

After you have the create functionality built out, consider building out the delete functionality. When you click on the `Donate to Goodwill` button, the ToyCard that you clicked on should be removed from the DOM as well as the backend.

After that, consider building out the like functionality. Clicking on the button should increase the number of likes on the DOM as well as the backend.


`json-server --watch db.json`
http://localhost:3000/toys

App.js
make initial fetch to get all toys, pass data down to toy container
|
-- Toy Form
|
-- Toy Container
map over toy data and render toy cards
  |
  -- Toy Card
  display toy informaiton to DOM

Given your component tree, think about which component should be responsible for the array. After you have put the data in the proper component, your next job is to render the ToyCard component on the page.
[x] - make fetch to get toy data
[x] - set state with return from fetch
[x] - pass toy array down to toy container
[x] - map over toy array, render toy cards
[x] - display toy information using toy card

Consider building out the functionality for the ToyForm. Using the ideas of controlled form and inverse data-flow, think about how to render a new ToyCard for the toy that you created.
[x] - grab input from input fields
[x] - submit form
[x] - use call back function to get data from toy form to parent element
[x] - make a post request to create new toy in database

Consider building out the delete functionality. When you click on the `Donate to Goodwill` button, the ToyCard that you clicked on should be removed from the DOM as well as the backend.
[x] - have click action on Donate to Goodwill button
[x] - make a delete fetch
  - we need toy id
[x] - remove toy card from the DOM
  - we need parent element / node

After that, consider building out the like functionality. Clicking on the button should increase the number of likes on the DOM as well as the backend.
[x] - have click action on button
[x] - increament likes on DOM
[x] - make patch request to increment likes in the database
  - need id, as well as likes