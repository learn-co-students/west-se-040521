console.log("js loaded")
// url
const url = "http://localhost:3000/colors"
// selectors
const form = document.querySelector("form")
const ul = document.querySelector('#colors')
// handlers
function handleSubmit(e){
    e.preventDefault()
    console.log(e.target)
    const newColor = {
        name: e.target.newcolor.value
    }
    postColor(newColor).then(color => renderColor(color))
}
// add listeners
form.addEventListener('submit', handleSubmit)
// fetches
function postColor(color){
    const config = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(color)
    }
    return fetch(url, config)
        .then(res => res.json())
}

// render
function renderColor(colorObj){
    const li = document.createElement('li')
    li.style.color = colorObj.name
    li.textContent = colorObj.name
    ul.appendChild(li)
}

// initial fetch
const initialize = () => {
    fetch(url)
    .then(r => r.json())
    .then(colorArr => colorArr.forEach(color => renderColor(color)))
}
initialize()