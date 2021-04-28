import React, { Component } from "react";
import "./estilo.css";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cateto1: "",
      cateto2: "",
      error: "",
    };
  }

  calcular(evento) {
    evento.preventDefault(); // Impede a pagina de recarregar quando o evento for chamado
    evento.stopPropagation(); //Impede a propagação do evento
    if (this.state.cateto1 === "" || this.state.cateto2 === "") {
      this.setState({
        error: "Campo não pode estar em branco",
      });
    } else {
      this.props.calcular(this.state.cateto1, this.state.cateto2);
    }
  }

  handleCateto(evento) {
    evento.stopPropagation(); //Impede a propagação do evento
    const name = evento.target.name; // Atribui a variaval name o nome referente ao input do evento
    const value = evento.target.value; // atribui a varial value o valuea do input do evento
    if (isNaN(value)) {
      this.setState({
        error: "somente numeros",
      }); //se o caracter digitado não for um numero, mostra msg de erro
    } else {
      this.setState({
        [name]: value,
        error: "",
      }); //adicona o valor do campo lido na variavel cateto1
    }
  }

  render() {
    return (
      //Criação de formulario
      <form
        className="formulario"
        onSubmit={this.calcular.bind(
          this
        )} /*Quando o botão calculor for apertado, chama a função _calcular */
      >
        <section>
          <label htmlFor="cateto1">Cateto:</label>
          <input
            type="text"
            placeholder="Primeiro cateto"
            name="cateto1"
            value={this.state.cateto1}
            className="formulario_input"
            onChange={this.handleCateto.bind(
              this
            )} /* Quanto o valor do campo for alterado, grava o valor na variavel cateto1*/
          />
        </section>
        <p className="formulario_erro">{this.state.error}</p>
        <section>
          <label htmlFor="cateto2">Cateto:</label>
          <input
            type="text"
            placeholder="Segundo cateto"
            name="cateto2"
            value={this.state.cateto2}
            className="formulario_input"
            onChange={this.handleCateto.bind(
              this
            )} /* Quanto o valor do campo for alterado, grava o valor na variavel cateto2*/
          />
        </section>
        <p className="formulario_erro">{this.state.error}</p>
        <button className="formulario_btn">Calcular</button>
      </form>
    );
  }
}

export default Formulario;
//exporta a variavel
