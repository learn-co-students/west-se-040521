## Stories

A user can:

1. See all the hog tiles w/name and image
    - "ui grid container" on parent of hog tiles
    - "ui eight wide column" on the childe hog tiles
2. Click a hog to see more details
    - click a hog, sets a chosenHog in state
    - conditionally renders HogList or HogDetail based on state
3. See only greased/ungreased hogs
4. Sort the above by name or weight

BONUS: Hide hogs (not remove from db, doesn't say to bring them back)

## Structure
- App
    - Header (renamed from Nav)
    - HogsContainer (contains state for hogs, filter and sort options)
        - FilterSort (updates filter and sort options in parent's state)
            - Filter
            - Sort
        - HogsList
            - HogTile (many)
        - HogDetail (conditionally rendered with HogsList)

## Image Paths
./hog-imgs/piggy_smalls.jpg (Image example)

let pigImage = require('../hog-imgs/piggy_smalls.jpg')

## Static Hogs Data
const hogs = [
  {
    name: 'Babe',
    specialty: 'Being incredibly cute',
    greased: false,
    weight: 2.0,
    'highest medal achieved': 'bronze'
  }
]

**Reasoning:**

I feel like this app doesn't actually have anything that resembles true navigation (it's OK to disagree with me on this, this is an opinion.), so I renamed Nav to Header.

I'd like to keep my components as simple and declarative as possible. Other than the Header, the other major component is the HogsContainer, which will contain all info related to the pigs. The specific pig info includes the menu of hogs (HogsList), and the specific details on a Hog. The HogsList will contain many pigs, so that will have HogTile children.

The FilterSort is an interesting component. I could have kept the Nav component as the Nav component and put it in there, but that didn't feel right to me. I personally don't see sorting and filtering as navigation. I'd rather they be inside the HogsContainer as their own component responsible for setting the state that determines what is displayed.

For showing the hog details upon click, I had several options, including:
- click the hog, and then show the details inside the HogTile instead of the image and name
- click the hog, and make a popup (modal) with the details appear
- click the hog, and then hide the HogsList and show only the hog details in the HogsContainer

I chose the last one simply because I liked it. The other choices are equally valid - this is purely preference. There may be other options I didn't think of.

HogsContainer is going to house all of the app's state. This is because the hogs and their details need to be shared with components which are siblings (HogsList and HogDetails). Also, the FilterSort component needs to set which filter and sorting options are active, and since those options determine which hogs are shown, that state will also need to live in HogsContainer, so that the results can be shared with HogsList.

Since HogsContainer contains all of the state, all of the other components will be functional and work with props. This might change as we build (we could run into problems along the way that require state, we shall see).