# Phase-3-ruby-intro-to-rack

## SWBATs

- [ ]  Review the client-server model and the request-response lifecycle
- [ ] Practice making a web server with Rack
- [ ] Utilize Postman to make a basic GET request from a Rack server
- [ ] Utilize react to make a request and see a response


### Review client-server and request-response
HTTP (Hypertext Transfer Protocol) is the language of the web and describes how webpages and files are sent over the internet. The protocol is based on a model of client and server: the client is either a program or a browser, and the server is the computer that has information about the web page.

The server that we make this request to is always located using a URL or URI which is composed of a few parts. Consider this URI: https://flatironschool.com/career-courses. The first part is the protocol http:// or https:// at the beginning of the URI, which describes the language that we're using to communicate with this website. The next is the domain which can either be an IP address or a string like go.flatironschool.com. When the domain is formatted as a string, we can divide each part of the string into separate parts: com is the top-level domain, flatironschool is the second-level domain, and we can continue with subdomains like go in the example above. Following the domain is a port address which is formatted like go.flatironschool.com:80, but these ports are implicit when accessing servers over either HTTP or HTTPS. And lastly is the resource that you want from this domain. In our example, it's the /career-courses resource.

As we are browsing the internet and we click a link or type an address to our address bar, we say that a request is being made to a server. We're asking another computer somewhere else in the world to send us the webpage (a document) or some other information over the internet so that our browser can read it and present it to us. What exactly our browser gets back from the server is what we call a response, and this entire cycle is called the request-response lifecycle. When we make a request, we should get a response.

There's actually a bunch of stuff that happens after the request is fired off and before the server even knows about the request. This whole process is called DNS lookup and is how we translate a domain name (or a string of text) into an IP address which is the permanent address of a web server.

When the browser receives the response, it has some information about the response itself, like its status, as well as a response body. The response body in the case of webpages is the actual HTML of the page. When the browser begins to read this HTML, it sometimes sees that other resources need to be requested for the webpage to be complete. These are usually things like images, fonts, data, or scripts.

In a very specific order, the browser loads all the assets it needs and begins to render the page. The HTML defines the structure as well as most of the external assets needed. The CSS defines how the page should look. The JavaScript defines how the page will behave once loaded and how the user can interact with it.

