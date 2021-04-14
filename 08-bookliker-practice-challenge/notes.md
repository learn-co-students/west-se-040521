Remember:
- when X event happens
- I do Y fetch
- and update Z in the DOM

Deliverables:
- [X] On page load, Get a list of books from server and render list of titles
    - GET fetch
    - iterating over the fetched json
    - adding <li>s to the DOM
- [X] Clicking on a title will render book details in show panel
    - GET fetch one book
    - add details to DOM
- [X] Clicking on the like button will add `{"id":1, "username":"pouros"}` to that book's users
    - PATCH fetch to update users: on given book
    - update the DOM with updated book

Advanced deliverables (stretch):
- [X] a user can unlike a book

Endpoints:
 GET `http://localhost:3000/books`
 GET `http://localhost:3000/books/:id`
 PATCH `http://localhost:3000/books/:id`
 
 
Data shape:
```js
{
      "id": 1,
      "title": "Grapefruit",
      "subtitle": "A book of Instruction and Drawings.",
      "description": "Back in print for the first time in nearly thirty years, here is Yoko Ono's whimsical, delightful, subversive, startling book of instructions for art and for life. 'Burn this book after you've read it.' -- Yoko 'A dream you dream alone may be a dream, but a dream two people dream together is a reality. This is the greatest book I've ever burned.' -- John",
      "author": "Yoko Ono",
      "img_url": "https://books.google.com/books/content?id=3S8Rwr-iBdoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "users": [
        {
          "id": 2,
          "username": "auer"
        },
        {
          "id": 8,
          "username": "maverick"
        }
      ]
    }
```

HTML for book detail:
```HTML
<div>
    <img />
    <h1>TITLE</h1>
    <h1>AUTHOR</h1>
    <p>description</p>
    <p>Likers:</p>
    <ul>
        <li>user1</li>
        <li>user2</li>
    </ul>
</div>

```