// console.log(document.cookie);

const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "Max", age: 30 };
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});
retrBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";"); // This is an array.
  const data = cookieData.map((i) => {
    return i.trim(); // This is just to remove the excess white space.
  });
  console.log(data[1].split("=")[1]); // user value
});
