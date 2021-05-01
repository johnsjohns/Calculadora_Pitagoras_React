import React, { Component } from "react";
import "./estilo.css";
import logo from "../../assets/img/pitagoras.jpg";
import icon from "../../assets/img/icon.png";

class Sobre extends Component {
  render() {
    return (
      <section className="sobre_section">
        <h2 className="sobre_titulo">Pitágoras</h2>
        <div className="sobre_painel">
          <img src={logo} alt="Imagem de Pitágoras" className="sobre_img"></img>
          <div className="sobre_painel_teorema">
            <textarea
              className="sobre_texto"
              defaultValue={`   Pitágoras foi um filósofo, matemático, astrônomo e músico grego pré-socrático. Nasceu na ilha de Samos no ano aproximado de 570 a.C.
    Em vida, fundou uma seita, a seita pitagórica, que deu origem à Escola Pitagórica da filosofia pré-socrática. Sua seita, que misturava Matemática, Filosofia, Astronomia e Música em uma doutrina religiosa, buscava a purificação da alma por meio do conhecimento e do pensamento. Pitágoras foi um exímio geômetra, deixando como principal contribuição para a Matemática a descoberta da relação de igualdade entre o quadrado da hipotenusa e a soma dos quadrados dos catetos no interior de um triângulo retângulo, o que ficou conhecido como teorema de Pitágoras.`}
            ></textarea>
            <img src={icon} alt="Representação grafica do teorema de pitágoras" className="sobre_img_teorema"></img>
          </div>
        </div>
      </section>
    );
  }
}
export default Sobre;
