import React, { Component } from "react";
import "./estilo.css";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cateto1: "",
      cateto2: "",
      error_cateto1: "",
      error_cateto2: "",
    };
  }

  calcular(evento) {
    evento.preventDefault(); // Impede a pagina de recarregar quando o evento for chamado
    evento.stopPropagation(); //Impede a propagação do evento
    if (this.state.cateto1 === "" || this.state.cateto2 === "") {
      if (this.state.cateto1 === "")
        this.setState({
          error_cateto1: "Campo não pode estar em branco",
        });
      if (this.state.cateto2 === "")
        this.setState({
          error_cateto2: "Campo não pode estar em branco",
        });
    } else {
      this.props.calcular(this.state.cateto1, this.state.cateto2);
    }
  }

  handleCateto(evento) {
    evento.stopPropagation(); //Impede a propagação do evento
    const name = evento.target.name; // Atribui a variaval name o nome referente ao input do evento
    const value = evento.target.value; // atribui a varial value o valuea do input do evento
    const error = "error_" + name; // adiciona o nome do elemento para formar o nome do elemento de erro

    if (isNaN(value)) {
      this.setState({
        [error]: "Digite somente números",
      }); //se o caracter digitado não for um numero, mostra msg de erro
    } else {
      this.setState({
        [name]: value,
        error_cateto1: "",
        error_cateto2: "",
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
        <div>
          <label htmlFor="cateto1" className="formulario_label">
            Cateto A:
          </label>
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
        </div>
        <p className="formulario_erro">{this.state.error_cateto1}</p>
        <div>
          <label htmlFor="cateto2" className="formulario_label">
            Cateto B:
          </label>
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
        </div>
        <p className="formulario_erro">{this.state.error_cateto2}</p>
        <div className="formulario_div_btn">
          <button className="formulario_btn">Calcular</button>
        </div>
      </form>
    );
  }
}

export default Formulario;
//exporta a variavel
