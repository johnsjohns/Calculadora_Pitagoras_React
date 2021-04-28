import React, { Component } from "react";
import "./estilo.css";

class Formulario extends Component {

  constructor(props) {
    super(props);
    this.cateto1 = 0;
    this.cateto2 = 0;
    
  }

  _calcular(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.calcular(this.cateto1, this.cateto2);
   
  }

  _handleCateto1(evento){
    evento.stopPropagation();
    this.cateto1 = evento.target.value;
  }

  _handleCateto2(evento){
    evento.stopPropagation();
    this.cateto2 = evento.target.value;
  }

  render() {
    return (
      <form className="formulario" 
      onSubmit={this._calcular.bind(this)}
      >
        <input
          type="text"
          placeholder="Primeiro cateto"
          className="formulario_input"
          onChange={this._handleCateto1.bind(this)}
        />
        <input
          type="text"
          placeholder="Segundo cateto"
          className="formulario_input"
          onChange={this._handleCateto2.bind(this)}
        />
        <button className="formulario_btn">Calcular</button>
      </form>
    );
  }
}

export default Formulario;
