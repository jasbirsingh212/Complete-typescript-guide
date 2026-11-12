import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Failed to fetch todo:", error.message);
    process.exitCode = 1;
  });