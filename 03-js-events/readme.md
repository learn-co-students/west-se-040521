# Intro Js
## Events
- Create event listeners
- Distinguish between event types
- Explain when and why to use event listeners
- Write event listeners as stand-alone functions and in-line functions
- Use event listeners to manipulate the DOM
- Delegate events using the event.target
- Synthesize knowledge of forms with event listeners

## What are Events
[List of Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- The user clicking the mouse over a certain element or hovering the cursor over a certain element.
- The user pressing a key on the keyboard.
- The user resizing or closing the browser window.
- A web page finishing loading.
- A form being submitted.
- A video being played, or paused, or finishing play.
- An error occurring.


```

const firstBtnOnPage = document.querySelector('button')

firstBtnOnPage.addEventListener('click', function() {
  console.log('BUTTON WAS CLICKED')
})
// We are telling addEventListener to invoke the anonymous function 
// passed as the second argument when the event fires; 
// we're waiting for something to happen then responding to this event.

   document.addEventListener("DOMContentLoaded", function(event){
     // code here will not run until the document loads
  })
// Here, we are telling addEventListener invoke the anonymous function after the document loads

```

### preventDefault()

Forms will attempt to make an HTTP POST request on submission. Recall from Mod2 that our forms would send a POST request that was then handled by our controller (remember HTTP and the request/response cycle?). If we give our form an action attribute, it will try to POST to the endpoint specified by the action attribute:

```

<form id="comment-form" action="/hotdog">
  <div class="field">
    <input id="new-comment" type="text" placeholder="New Comment" />
    <input type="submit" class="btn" value="Submit" />
  </div>
</form>
```

If our form does not have an action attribute it will attempt to POST to the URL we are currently on, making it appear as though our page is being refreshed. Even though it looks like the page is being refreshed, that is not technically what is happening. The form is sending a POST request out into the void

We can avoid this by telling our event handler to prevent that functionality with .preventDefault() 
````

  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault() 
    
    //stop form from POSTING
    
    console.log(event.target) //form
  })

```
