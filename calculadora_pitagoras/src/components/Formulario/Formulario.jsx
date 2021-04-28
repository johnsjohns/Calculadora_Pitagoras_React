import React, { Component } from "react";
import "./estilo.css";

class Formulario extends Component {
  render() {
    return (
      <form className="formulario">
        <input
          type="text"
          placeholder="Primeiro cateto"
          className="formulario_input"
        />
        <input
          type="text"
          placeholder="Segundo cateto"
          className="formulario_input"
        />
        <button>Calcular</button>
      </form>
    );
  }
}

export default Formulario;
