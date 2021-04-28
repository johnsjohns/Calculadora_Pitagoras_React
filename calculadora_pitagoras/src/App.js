import React, { Component } from "react";
import Formulario from "./components/Formulario";
import CardResposta from "./components/CardResposta";

class App extends Component {

  constructor(){
    super();
    this.hipotenusa = 0;
   
  }
  calcular(cateto1, cateto2){
   this.hipotenusa = Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
   console.log(this.hipotenusa);
   this.setState({
    hipotenusa: this.hipotenusa
  })
   
  }
  render() {
    return (
      <section>
        <Formulario calcular={this.calcular.bind(this)} />
        <CardResposta hipotenusa={this.hipotenusa}/>
      </section>
    );
  }
}

export default App;
