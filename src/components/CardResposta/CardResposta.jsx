import React, { Component } from "react";
import "./estilo.css";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
class CardResposta extends Component {
  render() {
    return (
      <section className="card_resposta_section">
        <Typography variant="caption" display="block" gutterBottom>
          Hipotenusa:{" "}
          {
            this.props
              .hipotenusa /* imprime a propriedade Hipotenusa passado pelo App*/
          }
        </Typography>
      </section>
    );
  }
}

export default CardResposta; //exporta a variavel CardResposta
