### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    Callbacks, Promises, 'async/await', Generators, and Event Emitters.

- What is a Promise?
    A Promise is an object in JavaScript used for asynchronous operations. It represents a value that may not be available yet but will be resolved or rejected at some point in the future. Promises provide a cleaner and more structured way to handle asynchronous code compared to callbacks, which can lead to callback hell or complex nested structures.

- What are the differences between an async function and a regular function?
    An async function is used for handling asynchronous operations and can use the await keyword to pause and resume execution, making it more synchronous-like. It returns a Promise.

    A regular function is synchronous, executes top-down, and returns a value immediately upon completion.

- What is the difference between Node.js and Express.js?
    Node.js is a runtime environment for executing JavaScript on the server side, while Express.js is a web application framework that simplifies the process of building web applications and APIs using Node.js. Express.js adds structure and tools to Node.js to make it more suitable for web development, handling HTTP requests and responses in an organized and efficient manner. Often, developers use both Node.js and Express.js together to build robust server-side applications.

- What is the error-first callback pattern?
    The error-first callback pattern is a convention in JavaScript where callback functions for asynchronous operations take two parameters: an error object as the first argument (usually named err) and the result as the second argument. If an error occurs during the operation, err contains information about the error; otherwise, it's null, and the result parameter holds the operation's result. This pattern is commonly used for handling asynchronous operations in Node.js and other JavaScript environments.

- What is middleware?
    Middleware is a software layer in web applications that processes incoming requests and outgoing responses. It performs tasks like authentication, logging, and data transformation. Middleware functions are executed in a specific order and help manage the flow of data between the client and server.

- What does the `next` function do?
    The `next` function is used in middleware functions in Express.js (Node.js web framework) to pass control to the next middleware or route handler in the chain. It's typically called within middleware to indicate that it has completed its tasks, and Express should move on to the next function in the request-response cycle.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
        Performance is poor due to sequential requests, Structure lacks concurrency, Variable naming could be clearer, Error handling is missing, URLs are hard-coded, Dependency (jQuery) assumed, Data ordering is inconsistent, and Code duplication for API requests.
