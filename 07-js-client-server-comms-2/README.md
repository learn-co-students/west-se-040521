# Fetch CRUD

## Objectives

- [ ] Make `POST`/`PATCH`/`DELETE` requests to persist changes to the server
- [ ] Understand the different configuration options for a fetch request (headers, method, body)
- [ ] Understand when to use optimistic vs pessimistic rendering

## Outline

- [ ] Perform CRUD actions with our API:
  - When the form is submitted: `POST /animals`
  - When the delete button is clicked: `DELETE /animals/1`
  - When the donate button is clicked: `PATCH /animals/1`
- [ ] Check for understanding: Exercise (in `/exercise` folder)

## Intro

This is the lecture when we finally can put together all three pillars of JS and
turn our app into a fully-fledged Single Page Application! We're going to do
full CRUD using fetch and persist changes to a backend.

The deliverables for this section are going to follow the same general steps:

1. When X Event Happens...
2. Do Y Fetch Request...
3. And Update Z On the DOM

Remember these steps any time you're working with fetch and the three pillars of
Javascript!

## Non-GET Fetch Requests

To make a non GET fetch request, we need to pass a second argument to fetch: the
configuration object. This lets us add additional information to our request.

The [MDN Using Fetch][using fetch] article demonstrates how to use `fetch` to
send JSON data, like we'll be doing with our API.

Here are some of the key properties of that configuration object:

```js
// config object
const config = {
  method: "POST" // the HTTP verb for the request (POST, PATCH, DELETE),
  headers: { // headers let us provide additional 'meta-data' about our request
    "Content-Type": "application/json" // this tells the server what format we're sending the BODY of the request in (JSON format)
  },
  body: JSON.stringify({ key: "value" }) // to send JSON data to the server, we need to call JSON.stringify to turn our object into a JSON-formatted string
}

// second argument for fetch is this config object
fetch("http://localhost:3000/animals", config)
```

Imagine we're taking some data from a form, and we want to use fetch to send
that data to our API. The object might look like this:

```js
const animalObj = {
  name: "Fido",
  image: "./images/dog.png"
  description: "A good pupper",
};
```

We can send that using `fetch` by including the object in to the body of the
fetch request:

```js
fetch("http://localhost:3000/animals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(animalObj),
});
```

If we want to work with the response, we need to chain the `.then` methods after
our fetch - same as when we made a GET request:

```js
fetch("http://localhost:3000/animals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(animalObj),
})
  .then((response) => response.json())
  .then((newAnimalFromServer) => {
    // do something with the response data (add it to the page!)
  });
```

Here's an example of each kind of request:

```js
// GET
fetch("http://localhost:3000/animals");

// POST
fetch("http://localhost:3000/animals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(animalObj),
});

// PATCH
fetch("http://localhost:3000/animals/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ donations: 100 }),
});

// DELETE
fetch("http://localhost:3000/animals/1", {
  method: "DELETE",
});
```

## Optimistic vs Pessimistic Rendering

### Optimistic

- You can manipulate the DOM synchronously (outside the `.then()`).
- This is referred to as optimist rendering because you are **not waiting** for the async response to resolve.

**Pros**:

- Super responsive! User Experience++!

**Cons**:

- `fetch`es (aka: the "Promise") can lie!! If the `fetch` fails, data can become out of sync.
- `fetch`es are also **NOT** guaranteed to run in order.
  - What if we create a Pokemon and then update it relying all on optimistic rendering? The `PATCH` might reach the server _before_ your `POST`!!

Example:

```js
document.querySelector("#like").addEventListener("click", (event) => {
  const newLikes = parseInt(event.target.textContent) + 1;

  fetch("http://localhost:3000/animals/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: newLikes }),
  });

  // optimist! don't wait for the response, just update the DOM anyway
  event.target.textContent = `${newLikes} likes`;
});
```

### Pessimistic

You can manipulate the DOM asynchronously (inside the `.then()`) using the
response from the server.

Doing this is called pessimistic rendering because you **are waiting until** the
async response has return to complete the action. In other words, you're
pessimistic about the success of the request. This is to make sure the data on
your page is consistent with the database.

**Pros**:

- What is reflected in the _client_ will always be in sync with the _server_.

**Cons**:

- If the `fetch` is slow, the UI will appear to not respond! (**hint** maybe
  good UX will signal to the user that something is happening)

![loading spinner](https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif)

Example of a feature you might want to always do pessimistically: **user
signup**

- Think about registration forms on the web. What do they normally all do?
  - Disable things once you submit?
  - Show a spinner?
  - Anything else?
- You want to confirm that a new user was successfully created before
  redirecting your user somewhere. In this case, pessimistic rendering is
  preferable.

Example Code:

```js
document.querySelector("#like").addEventListener("click", (event) => {
  const newLikes = parseInt(event.target.textContent) + 1;

  fetch("http://localhost:3000/animals/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: newLikes }),
  })
    .then((r) => r.json())
    .then((animal) => {
      // pessimist! wait for the response, before updating the DOM
      event.target.textContent = `${animal.likes} likes`;
    });
});
```

## Resources

- [MDN: Using Fetch][using fetch]
- [json-server][json-server]
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[json-server]: https://github.com/typicode/json-server
[using fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
