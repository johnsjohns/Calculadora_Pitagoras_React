import React, { Component } from 'react';

class CardResposta extends Component {
    
    render() { 
        return (
            <section>
                <p>Hipotenusa: {this.props.hipotenusa/* imprime a propriedade Hipotenusa passado pelo App*/ }</p>
            </section>
          );
    }
}
 
export default CardResposta; //exporta a variavel CardResposta