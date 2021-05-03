## Stories

A user can:

1. See all the hog tiles w/name and image
    - "ui grid container" on parent of hog tiles
    - "ui eight wide column" on the childe hog tiles
2. Click a hog to see more details
    - click a hog, hides HogList and show only HogDetail
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