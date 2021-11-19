import React from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "../hooks/useForm";

const Form = ({ handleAddTask }) => {
  const initialState = {
    nombre: "tarea",
    descripcion: "tateatteatattetaetaet",
    estado: "pendiente",
    prioridad: false,
  };
  const [input, handleChange, reset] = useForm(initialState);
  const { nombre, estado, descripcion, prioridad } = input;

  const handleSumbit = (event) => {
    event.preventDefault();
    if (!nombre.trim()) {
      //ver que es esto de arriba trim()
      event.target[0].focus();
      Swal.fire({
        title: "  Error!",
        text: "no deje el nombre vacio papu",
        icon: "error",
      });
      return;
    }
    if (!descripcion.trim()) {
      //ver que es esto de arriba trim()
      event.target[1].focus();
      Swal.fire({
        title: "  Error!",
        text: "no deje el descripccion  vacio papu",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Capo",
      text: "ya tienes tareas",
      icon: "success",
    });

    handleAddTask({
      nombre,
      descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad,
      id: uuidv4(),
    });
    reset();
  };

  return (
    <div>
      <h3>Agregar tarea</h3>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="ingrese nombre"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="ingrese descripción"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <select
          name="estado"
          value={estado}
          onChange={handleChange}
          className="form-control mb-2"
        >
          <option value="pendiente">pendiente</option>
          <option value="finalizado">finalizado</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox"
            name="prioridad"
            id="idCheckbox"
            checked={prioridad}
            onChange={handleChange}
            className="form-check-input mb-2"
          />
          <label htmlFor="idCheckbox" className="form-check-label">
            Dar prioridad
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Form;
