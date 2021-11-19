import React, { useEffect, useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

const TodoList = () => {
  //State
  const [tasks, setTasks] = useState([]);
  //Effect

  useEffect(() => {
    if (localStorage.getItem("task")) {
      setTasks(JSON.parse(localStorage.getItem("task")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleRemoveTask = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEditTask = (id) => {
    setTasks(
      tasks?.map((item) =>
        item.id === id ? { ...item, estado: !item.estado } : item,
      ),
    );
  };
  return (
    <div>
      <Form handleAddTask={handleAddTask} />
      <ul className="list-group list-group-numbered">
        {tasks?.map(({ id, descripcion, nombre, estado, prioridad }) => (
          <Todo
            id={id}
            key={id}
            nombre={nombre}
            estado={estado}
            descripcion={descripcion}
            prioridad={prioridad}
            handleRemoveTask={handleRemoveTask}
            handleEditTask={handleEditTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
