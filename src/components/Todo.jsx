import React from "react";

const Todo = ({
  handleRemoveTask,
  nombre,
  id,
  handleEditTask,
  descripcion,
  estado,
  prioridad,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {nombre} | {estado ? "finalizado" : "pendiente"}
        </div>
        <p>{descripcion}</p>
        <div>
          <button
            onClick={() => handleRemoveTask(id)}
            className="btn btn-danger"
          >
            eliminar
          </button>
          <button
            onClick={() => handleEditTask(id)}
            className="btn btn-warning"
          >
            edita papu
          </button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">
        {prioridad && "Prioritario"}
      </span>
    </li>
  );
};

export default Todo;
