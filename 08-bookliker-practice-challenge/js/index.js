/* Declare constants */
 
 const URL = `http://localhost:3000/books`
 const currentUser = {
    "id": 2,
    "username": "auer"
  }

/* Selectors */
const list = document.querySelector('#list')
const show = document.querySelector("#show-panel")

/* Event handler functions */
function handleClick(e){
    const id = e.target.dataset.bookId
    // call fetch function, then pass result to render function
    getOneBook(id).then(book => renderDetail(book))
}

function handleLike(e){
    console.log(e.target.tagName)
    // uses event delegation to detect origin/target of event
    // conditional so that we only execute code when the event target was a button
    if(e.target.tagName ==="BUTTON"){
        // gets the right book id from the event target dataset; need the id for the PATCH request
        const id = e.target.dataset.bookId
        console.log(id)
        // conditional to check whether the button should add or remove a liker/user
        if (e.target.innerText == 'LIKE') {
            getOneBook(id)
            .then(book => {
                // adds the current user to the request body
                const body = {
                    users: [...book.users, currentUser]
                }
                updateLikes(body, id)
            })
        } else {
            getOneBook(id)
            .then(book => {
                // removes the currentUser from the users array
                const filteredUsers = book.users.filter(user => user.id != currentUser.id)
                const body = {
                    users: filteredUsers
                }
                updateLikes(body, id)
            })
        }
    }

}

/* Event Listeners */
// adds a listener higher up the DOM tree; handleLike() will have to account for bubbling
show.addEventListener('click', handleLike)

/* Fetch functions */
function getAllBooks(){
    fetch(URL)
    .then(res => res.json())
    .then(books => listBooks(books))
}

function getOneBook(id){
    // uses string interpolation to add the id to the base url
    return fetch(URL + `/${id}`)
    .then(res => res.json())
}

// this function is reusable, gets used to both add and remove a user from a book's users
function updateLikes(body, id){
    const config = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    fetch(URL + `/${id}`, config)
        .then(res => res.json())
        .then(book => renderDetail(book))
}

/* Render functions */
function listBooks(books){
    books.forEach(book => listLi(book))
}

function listLi(book){
    const li = document.createElement('li')
    li.textContent = book.title
    // adding the book id to the <li></li> making it easier to fetch a single book from this click event
    li.dataset.bookId = book.id
    li.addEventListener('click', handleClick)
    list.appendChild(li)
}

// iterates over the array of a book's users to create an array of <li></li> strings, then uses .join() to convert the array of strings into a single string
function listLikers(users){
    return users.map(u => `<li>${u.username}</li>`).join('')
}

function renderDetail(book){
    // show.innerHTML = ''
    const card = `
    <div>
        <img src="${book.img_url}"/>
        <h1>${book.title}</h1>
        <h1>${book.author}</h1>
        <p>${book.description}</p>
        <p>Likers:</p>
        <ul>
            ${listLikers(book.users)}
        </ul>
    </div>
    `
    const button = document.createElement('button')
    // conditional which changes the text and function of the button based on whether the currentUser is present in the book's users array; .some(returns true if it's callback returns true for any array element)
    if(book.users.some(user => user.id === currentUser.id)){
        button.textContent = "UNLIKE"
    } else {
        button.textContent = "LIKE"
    }
    button.dataset.bookId = book.id
    // overwrites the content of <div id="show-panel"></div> with the new card HTML
    show.innerHTML = card
    show.appendChild(button)
}



/* Intialize function */
function initialize(){
    getAllBooks()
}
initialize()



