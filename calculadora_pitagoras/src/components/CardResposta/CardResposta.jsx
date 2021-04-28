import React, { Component } from 'react';

class CardResposta extends Component {
    
    render() { 
        return (
            <section>
                <p>Hipotenusa: {this.props.hipotenusa}</p>
            </section>
          );
    }
}
 
export default CardResposta;