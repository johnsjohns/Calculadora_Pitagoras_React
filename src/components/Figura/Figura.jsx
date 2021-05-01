import React, { Component } from "react";
import "./estilo.css";
const icone = "./icon.png"


class Figura extends Component{
    render(){
        return(
            <section>
            <img src={icone} alt="Teorema da Pitágoras" class="figura_img"/>
            </section>
        )

    }
}
export default Figura