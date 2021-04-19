
## SWBATs

* What is an API?
* Read API documentation
* Public APIs vs Private APIs
* Make request to internal & external API


## Data shape
### users
{
  id: number,
  username: string
}
### cryptos
{
  id: number,
  userId: number,
  name: string,
  ticker: string
}

# API
Application Programming Interface























### What is an API

* You can think of an Api as "Ports of Entry" into a codebase. Just like entering the USA you can either go via airport or seaport or land checkpoints, API's can provide access to huge amounts of functionality and data as long as you interface with them correctly. _How_ you interface with an API will be dictated by the creators of the API and articulated in the Documentation

* An API can be downloadable (for example, JQuery) or the request must be made through a network request (Google Maps API)
* The API can be either public or private which tells you _who_ can access it. 

### How to Read the Docs

* First go through the summary or overview
  * this will give you an idea of what this endpoint or method is trying to accomplish
  * it will likely also explain what the result of calling the endpoint/method will be (i.e you can expect an array back or it returns a new object etc.)
* Review the syntax
  * how do i call this method/endpoint?
  * what arguments is it expecting, are they optional?
* Look for examples
  * Examples are a great way to get an understanding of you're going use the endpoint or method
  * often times it is helpful to walk through the example and see if you can explain what is happening
  * It can also be useful to copy the example and use that as a launching point for your own code.
* Check for deprecation
  * Make sure that the method or api you are using is still valid.
  * Api endpoints and methods often get deprecated by the maintaners of the api. THis means they are not continuing work oon it and there
    may be security vulnerabilities.

### Public vs Private API

* Private:
  * Consumers of the API are within the same organization
  * Domain knowledge is much higher, because you belong to the organization you will know all of the inner machinations
  * Tightly coordinated.
* Public
  * Consumers of the API have weak relationship with your organization
  * Signup info and that's it.
  * Top Down

### Making Requests

* making a request to an API will be determined by the API's documentation
* A common for api access is using token-based authentication
  * when you request permission to use an API, you will enter your credentials and the API will provide you with an access token
  * this access token is what will be passed along in the fetch request, within your headers, when you ping the API
  * The API will verify that the token is valid
    * if the token is valid it will respond with the data requested
    * if it's invalid it will respond with an error.

### Consuming The Results

* Once the fetch request comes back you can use the data you received by parsing out the JSON.
  * JSON is a standardized format for transferring data from client to server and back
  * When you're sending a letter you start with a header, then a body, then your footer. siimilarly, JSON provides a predictable format for both sides to easily parse and consume
* Once the JSON has been parsed, you are ready to iterate over the data and render what you need to on the page.

