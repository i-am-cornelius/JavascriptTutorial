// Fetching JSON data from a placeholder API using Promises only
// Fetch already has promise implemented under the hood, so no need to do things manually as in the previous examples
// fetch syntax: fetch(url, {}). url is compulsory because that is how the api is accessed, {} is optional could be methods, etc.

// Most basic use
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))


// doing proper checks for safety
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      // manually throw if HTTP status not 200-299
      throw new Error("HTTP error! Status: " + response.status);
    }
    console.log("Step 1: Got raw response");
    return response.json(); // returns another Promise
  })
  .then((data) => {
    console.log("Step 2: Parsed JSON:", data);
  })
  .catch((error) => {
    console.error("Step 3: Something went wrong:", error.message);
  });


// I make it clearer and put it inside a function to allow passing the id as argument
function fetchPostById(id) {
  // Step 1: Call fetch → returns a Promise
  const fetchPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  // Step 2: Handle raw response
  const responsePromise = fetchPromise.then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    console.log("Got raw response for ID:", id);
    return response.json(); // returns another Promise
  });

  // Step 3: Handle parsed JSON
  responsePromise
    .then((data) => {
      console.log("Parsed JSON data:", data);
    })
    .catch((error) => {
      console.error("Something went wrong:", error.message);
    });
}

// Example usage:
fetchPostById(1);
fetchPostById(2);
fetchPostById(3);
fetchPostById(4);
fetchPostById(5);

// Once again comment out other sections to test out individual section properly
