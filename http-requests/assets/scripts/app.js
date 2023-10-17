const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.responseType = "json"; // automatically parses to JS; same as using JSON.parse

xhr.onload = function () {
  //   console.log(xhr.response);
  //   const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  console.log(xhr.response);
};

xhr.send();
