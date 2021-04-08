# Request-Response

## Objectives
  By the end of this lesson, SWBAT:
- [ ] Differentiate between the roles of the client and the server in one request-response cycle
- [ ] Describe the parts of an HTTP Request object and their significances
- [ ] Describe the parts of an HTTP Response object and their significances
- [ ] Make three requests to one server, using different tools (`curl`, Postman, Browser)

## What happens when you type a URL in the browser and press enter?

![request_resp](./req_resp.png)

- What does it take to get these [cute pictures](https://www.reddit.com/r/Awww/) to show up?

- In the example above, who is the client? Who is the server?

- Who makes the request? Who makes the response? 

- What are the rules and protocols that govern a request-response cycle called?

- What is needed to make a successful HTTP Request?

- What kind of documents can a successful HTTP Response send back to your computer? How do you know if a Request was properly processed?  

- Other than using an Internet Browser, what other ways can we fire off a Request-Response Cycle?

## CURL

```shell

curl "https://www.reddit.com/r/Awww/.json"

curl -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36" "https://www.reddit.com/r/Awww/.json"

```

## Resources

- [Postman](https://www.postman.com/)
- [Cat Status Codes](https://http.cat/)
- [Dog Status Codes](https://httpstatusdogs.com/)
- [Rapper Status Codes](http://httpstatusrappers.com/)


