import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    //const userid = todo.userId; // This line is added to extract the userId property

    logTodo(id, title, completed);
  })
  .catch((error) => {
    console.error("Failed to fetch todo:", error.message);
  });

const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
      The Task with ID: ${id}, 
      has Title: ${title}, 
      is Finished?: ${completed}`);
}