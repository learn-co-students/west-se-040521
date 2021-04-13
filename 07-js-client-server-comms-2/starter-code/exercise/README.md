# Fetch POST Exercise

## Setup

Make sure you have `json-server` installed:

```sh
npm install -g json-server
```

Then, from the same directory as the `db.json` file, run:

```sh
json-server --watch db.json
```

## Deliverables

When the `form#new-color-form` is submitted, make a POST request to create a new
color:

```txt
POST /colors

Headers:
- Content-Type: application/json

Body:
{ color: "string" }
```

Using the response from the server, create a new `<li>`, and add it to the
`ul#colors`. Use the style attribute to set its font color.

```html
<li style="color: red">red</li>
```
