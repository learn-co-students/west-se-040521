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
    getOneBook(id).then(book => renderDetail(book))
}

function handleLike(e){
    console.log(e.target.tagName)
    // uses event delegation to detect origin/target of event
    if(e.target.tagName ==="BUTTON"){
        const id = e.target.dataset.bookId
        console.log(id)
        if (e.target.innerText == 'LIKE') {
            getOneBook(id)
            .then(book => {
                const body = {
                    users: [...book.users, currentUser]
                }
                updateLikes(body, id)
            })
        } else {
            getOneBook(id)
            .then(book => {
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
show.addEventListener('click', handleLike)

/* Fetch functions */
function getAllBooks(){
    fetch(URL)
    .then(res => res.json())
    .then(books => listBooks(books))
}
function getOneBook(id){
    // how to get a book id for my fetch?
    console.log(id)
    return fetch(URL + `/${id}`)
    .then(res => res.json())
}

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
    li.dataset.bookId = book.id
    li.addEventListener('click', handleClick)
    list.appendChild(li)
}

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
    if(book.users.some(user => user.id === currentUser.id)){
        button.textContent = "UNLIKE"
    } else {
        button.textContent = "LIKE"
    }
    button.dataset.bookId = book.id
    show.innerHTML = card
    show.appendChild(button)
}



/* Intialize function */
function initialize(){
    getAllBooks()
}
initialize()



