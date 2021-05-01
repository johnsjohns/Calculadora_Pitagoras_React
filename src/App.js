import React, { Component } from "react";
import Formulario from "./components/Formulario";
import CardResposta from "./components/CardResposta";
import Sobre from "./components/Sobre";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.hipotenusa = 0; //criando variavel hipotenusa
  }
  calcular(cateto1, cateto2) {
    // calculo de hipotenusa
    this.hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    //hipotenusa igual a raiz quadrada da soma dos quadrados do catetos
    this.setState({
      //informa que ouve uma mudança na variavel hipotenusa
      hipotenusa: this.hipotenusa,
    });
  }
  render() {
    return (
      <section className="app_section">
        <Formulario
          calcular={
            this.calcular.bind(
              this
            ) /* passa a funcão calcular como parametro para a classe Formulario */
          }
        />
        <CardResposta
          hipotenusa={
            this
              .hipotenusa /**passa a variavel hipotenusa como parametro para a classe CardResposta */
          }
        />

        <Sobre />
      </section>
    );
  }
}

export default App;
