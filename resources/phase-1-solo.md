### Guidelines for working Solo
Just because you don't have a partner doesn't mean you shouldn't work as a team! For you, it'll be a team of one.
**Note:** Solo Projects are **NOT** required to integrate an external API. Instead, you'll be using a JSON server in your project to persist your app's interactivity.
### Project Requirements
Your app must be a HTML/CSS/JS frontend that accesses a JSON server. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.
Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.
Some interactivity is required. This could be as simple as adding a "like" button or adding comments.
Your application must have minimum three CRUD actions. 

- Create a resource using POST
- Read a resource using GET
- Update a resource using PATCH
- Destroy a resource using Delete

Having a partner usually forces you to have explicit conversations about the design of your application and the choices you make. Without a partner, you should still be very clear - and write down - the decisions you make about your project. This will not only help you think more clearly, it will also help you communicate your project to instructors when asking for help.

- Write down your ideas (use diagrams!)
- Get your MVP, JSON server, and wireframes approved by instructors before you start coding
- Start by creating directories and github a repository
- Next, build the R from CRUD, vertically! one fetch call, and one DOM update. Add seed data to your JSON server and confirm that your code works by testing it visually.
- Then, build the next CRUD action (maybe Create or Update), again building vertically.
- Continue building features one by one, (vertically!)

Since you are solo, you should not expect to build as large of an application as groups working in pairs. That's fine! Check in with your instructors to make sure your scope and timeline are manageable.
 
### Setting up JSON Server
Install [JSON Server](https://www.npmjs.com/package/json-server)
```
npm install -g json-server
```
Create a db.json file with some data
```
{
  "books": [
    { 
      "id": 1, 
      "title": "You Don't Know JS: Yet!", 
      "author": "Kyle Simpson", 
      "comments": [
        { 
          "id": 1, 
          "body": "some comment"
        }
      ]
    }
  ]
}
```
Start Server
```
json-server --watch db.json
```