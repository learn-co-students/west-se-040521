
let allCats = [
    {
        "id":0,
        "name":"Party Cat",
        "image":"assets/party_cat.jpeg",
        "catchphrase":"Party on Party Cat"
    },
    {   "id":1,
        "name":"Mittens",
        "image":"https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg",
        "catchphrase":"I'd rather be at home with my human"
    },
    {
        "id":2,
        "name":"Tod",
        "image":"https://i.ytimg.com/vi/h6ExCwtgGe8/maxresdefault.jpg",
        "catchphrase":"Yeah... I'm a dj, but like I don't like to play out at lame venues like this to main stream. CatMittens has really sold out imo. Anyway, check out my sound cloud at todEzyPizza its mostly progressive house and future bass."
    }
]

// Change DOM Elements
function loadCat(cat){
    const container = document.querySelector('#selected_cat_info')
    // const h2 = container.querySelector('h2')
    const h2 = document.querySelector('#party_cat_name')
    const img = container.querySelector('img')
    const p = document.querySelector('#cat_phrase')
    h2.textContent = cat.name
    img.src = cat.image
    p.textContent = cat.catchphrase
    
}

function addToAside(cat){
    const ul = document.querySelector('#cat_ul')
    const li = document.createElement('li')
    li.textContent = cat.name
    li.addEventListener('click', handleClick)
    ul.appendChild(li)
}

// event handlers
function handleClick(event){
    console.log(event.target.textContent)
    const selectedCat = allCats.find(cat => cat.name === event.target.textContent)
    console.log(selectedCat)
    loadCat(selectedCat)
}

function handleSubmit(event){
    event.preventDefault()
    // console.log(event.target.cat_name.value)
    let cat = {
        name: event.target.cat_name.value,
        image: event.target.cat_image.value,
        catchphrase:event.target.cat_phrase.value
    }
    // console.log(cat)
    allCats.push(cat)
    loadCat(cat)
    addToAside(cat)
    event.target.reset()
}

// register listeners
function addListeners(){
    // const ul = document.querySelector('#cat_ul')
    // const ul = document.getElementById('cat_ul')
    const lis = document.querySelectorAll('#cat_ul li')
    // console.log(lis)
    lis.forEach(function(li){
        li.addEventListener('click', handleClick)
    })
    const form = document.querySelector('#cat_form')
    form.addEventListener('submit', event => handleSubmit(event))
}
addListeners()