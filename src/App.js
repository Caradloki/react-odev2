import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredList =
    activeCategory === "All"
      ? tasks
      : activeCategory === "Active"
      ? tasks.filter((task) => task.isCompleted !== true)
      : tasks.filter((task) => task.isCompleted !== false);

  const handleToggleCompleted = (id) => {
    const updatedTask = tasks.find((task) => task.id === id);
    updatedTask.isCompleted = !updatedTask.isCompleted;
    const newTasks = tasks.map((task) => (task.id === id ? updatedTask : task));
    setTasks(newTasks);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleClear = () => {
    let tempArr = [];
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].isCompleted === false) {
        tempArr.push(tasks[i]);
      }
    }
    setTasks(tempArr);
  };

  return (
    <section className="todoapp">
      <Header setTasks={setTasks} tasks={tasks} />
      <Main
        filteredList={filteredList}
        tasks={tasks}
        handleToggleCompleted={handleToggleCompleted}
        handleDelete={handleDelete}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
        handleClear={handleClear}
      />
    </section>
  );
}

export default App;