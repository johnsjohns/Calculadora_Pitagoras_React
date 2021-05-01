import React, { Component } from "react";
import "./estilo.css";
import "fontsource-roboto";

class CardResposta extends Component {
  render() {
    return (
      <section className="card_resposta_section">
        <div className="card_resposta">Hipotenusa:</div>
        <span className="card_resposta_hipotenusa">
          {
            this.props
              .hipotenusa /* imprime a propriedade Hipotenusa passado pelo App*/
          }
        </span>
      </section>
    );
  }
}

export default CardResposta; //exporta a variavel CardResposta
