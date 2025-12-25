import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TodoDetails = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todoId]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h3>Todo Details</h3>
      <p><b>ID:</b> {todo.id}</p>
      <p><b>Title:</b> {todo.title}</p>
      <p>
        <b>Status:</b> {todo.completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default TodoDetails;
