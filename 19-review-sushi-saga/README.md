# Mod 4 Practice Code Challenge: Sushi Saga

Welcome to Sushi Saga, where your journey to sushi is only just beginning!

We've had a bit of trouble with our patented Sushi Saga conveyor belt system, so before you can eat, you're going to have to help us get it working.

**Here's what it should look like:**

![Sushi Saga](https://raw.githubusercontent.com/learn-co-curriculum/React-Practice-Code-Challenge/master/sushi-saga-demo.gif)

**Doesn't that look delicious?!**

## Setup

### Server

To get you going, we've got a backend just chock full of sushi just waiting to be eaten! To get get these guys, you're going to have to do the follow:

1. Navigate to `sushi-saga-client` and run `json-server --watch db.json`
2. Navigate to `http://localhost:3000/sushis` to confirm delivery of sushi!


### Client

Just as all good sushi needs a firm base of delicious rice, we've given you quite a bit of code to start off your frontend!

This will be located within the `sushi-saga-client` directory of this repo. Inside are all the components you'll need, as well as instructions as to where and how to render those components properly.

The component hierarchy should be as follows:

- `App` is parent to both `SushiContainer` and `Table`
- `SushiContainer` is parent to both `Sushi` and `MoreButton`

- App
    - SushiContainer
        - Sushi*
        - MoreButton
    - Table

Be sure to read all of the notes in the all of the components before getting started! They will give you clues as to how and where to manage `state` and `props`

## Deliverables

Inspectors will be coming by to check that our patented Sushi Saga conveyor belt is working properly! Oh no! They will be checking the following:

1. [X] Sushi list is properly received from the server
    - fetch in componentDidMount
    - keep in state in arr
2. [X] Only 4 sushi are rendered at a time
    -  X first render all sushis, THEN figure out how to limit
    - what should go in state? currentSush(int)? a 2nd array
3. [X] Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.
    - a cb function passed down to the button
    - will update something in state (?)
4. [x] Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
    - a cb eatSushi passed down to Sushi
    - sushis are displayed based on eated status
    - where to keep eaten? in state? as an attr of a sushi obj?
    - Table expects an array of eaten sushis
5. [x] We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the `Table` component
    - initialize state with money: integer
    - update eatSushi to also update money in state
6. [X] No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance
    - another update to eatSushi fn: adds a conditional check

### Bonus

If and only if you have time, you may work on the following:

1. [x] SushiWallet! Add a form for customers to add more money to their balance
    - a new cb fn that lives where state.money lives
    - does it need to be a form? could be a prompt?
2. [X] Full rotation! When the end of the line of sushi is reached, the conveyor belt should start from the beginning. Sushi that have already been eaten should remain eaten. It would be creepy if they reappeared!
    - adds a contional to moreSushi cb, do comparison with allSushi.length
    - will be easier if we keep an index to compare with allSushi.length
    - 'remain eaten' argues for 'eaten' being a property of each sushi obj
3. Anything else!

**Note:** If at the end of the challenge you have achieved all the functionality required but the style looks off, this is okay!

{
      "id": 1,
      "name": "Maguro Magic",
      "img_url": "./sushi/maguro.png",
      "price": 20,
      "created_at": "2018-07-27T18:53:16.241Z"
}