import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // ADD TASK
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // MARK AS DONE
  const toggleDone = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Simple To-Do App 📝</h1>

      {/* INPUT */}
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      {/* LIST */}
      <div>
        {tasks.map((t) => (
          <div key={t.id} style={{ margin: "10px" }}>
            <span
              style={{
                textDecoration: t.done ? "line-through" : "none",
              }}
            >
              {t.text}
            </span>

            <button onClick={() => toggleDone(t.id)}>
              {t.done ? "Undo" : "Done"}
            </button>

            <button onClick={() => deleteTask(t.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;