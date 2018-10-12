import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Vtv extends React.Component {
  constructor() {
    super();
    this.meses = ["Octubre", "Noviembre", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre"];
    this.patron = new RegExp(/^[A-ZÑ]{3}\d{3}$/); 
    this.state = {
      resultado:null
    };  
  }

  verificar = () => {
    const patente = document.getElementById("patente").value.toUpperCase();
    console.log(patente);
    
    if(this.patron.test(patente)){
      
      
      let ultimocaracter = parseInt(patente.substring(patente.length-1),10);
      console.log(ultimocaracter);

      this.setState({
        resultado: "Debes concurrir el mes de " + this.meses[ultimocaracter]
      })

      



    }
    else{
      this.setState({
        resultado: "Patente NO Valida"
      })
    }


  }

  render() {
    return(
      <section>
        <form>
          <h1>VTV</h1>
          <h2>Cuando realizar el control</h2>
          <img src="img/patente.jpg" alt=""/>
          <input type="text" id="patente" placeholder="AAA123..."/>
          <input type="button" id="bt" onClick={this.verificar} value="Verificar" />
        </form>
        <div id="res">
          {this.state.resultado}
        </div>
      </section>
    )
}
}
ReactDOM.render(<Vtv />, document.getElementById("root"));