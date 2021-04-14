console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  fetchImages()
  fetchBreeds()

  let dropdown = document.querySelector('#breed-dropdown')
  dropdown.addEventListener('change', filterBreeds)
})


//! Challenge 1 DONE

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


const fetchImages = () => {
  //TODO: on page load, fetches the images using the url above
  fetch(imgUrl)
  //TODO: parses the response as `JSON`
  .then(res => res.json())
  //TODO: adds image elements to the DOM **for each** 🤔 image in the array
  .then(data => data.message.forEach(url => renderImage(url)))
}

const renderImage = (url) => {
  let imageDiv = document.querySelector('#dog-image-container')
  let img = document.createElement('img')

  img.src = url
  
  imageDiv.appendChild(img)
}



//! Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = []

//TODO: on page load, fetches all the dog breeds using the url above
const fetchBreeds = () => {
  fetch(breedUrl)
  .then(res => res.json())
  .then(data => {
    for (breed in data.message) {
      if(data.message[breed].length === 0) {
        allBreeds.push(breed)
      } else {
        for (variation of data.message[breed]) {
          allBreeds.push(`${variation} ${breed}`)
        }
      }
    }
    renderBreeds(allBreeds)
  })
  
}

//! Challenge 3

//TODO: add JavaScript so that, when the user clicks on any one of the `<li>`s the font color of that `<li>` changes

const renderBreeds = (breeds) => {
  //TODO: adds the breeds to the page in the `<ul>` provided in `index.html`
  breeds.forEach(breed => {
    
    let breedUl = document.querySelector('#dog-breeds')
    let li = document.createElement('li')

    li.innerText = breed

    breedUl.appendChild(li)

    li.addEventListener('click', changeColor)
  })
}

const changeColor = event => {
  event.target.style.color = changeColorHelper()
}


const changeColorHelper = () => {
  //TODO: Create array of many colors
  const colorArray = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  return colorArray[Math.floor(Math.random() * colorArray.length)];
};




//! Challenge 4

//TODO: add JavaScript so that the user can filter breeds that start with a particular letter

const filterBreeds = event => {

  let breedUl = document.querySelector('#dog-breeds')

  let filteredBreeds = allBreeds.filter(breed => {
    console.log(breed[0])
  })

  breedUl.innerHTML = ''

  renderBreeds(filteredBreeds)
}

