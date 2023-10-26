const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();

  //   xhr.open(method, url);

  //   xhr.responseType = "json"; // automatically parses to JS; same as using JSON.parse

  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //       //   const listOfPosts = JSON.parse(xhr.response);
  //     } else {
  //       reject(new Error("Something went wrong!"));
  //     }
  //   };

  //   xhr.onerror = function () {
  //     reject(new Error("Failed to send request!"));
  //   };

  //   xhr.send(JSON.stringify(data));

  // });
  // return promise;
  return fetch(url, {
    method: method,
    body: data,
    // body: JSON.stringify(data),
    // headers: {
    //   "Content-type": "application/json",
    // },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json(); // This will parse the body of the response and transform it from json to javascript.
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something went wrong server-side");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new error("Something went wrong");
    });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );

    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const fd = new FormData(form);
  // fd.append("title", title);
  // fd.append("body", content);
  fd.append("userID", userId);

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
}

fetchButton.addEventListener("click", () => {
  fetchPosts();
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Can validate user input here
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    // if true, that means the user clicked on a button; we don't want this going off every time the user clicks anywhere
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
