
import './App.css';
import {Component} from 'react';
import { Busca } from './components/Busca';
import { Cabecalho } from './components/Cabecalho';
import { Rodape } from './components/Rodape';
import { Lista } from './components/Lista';




class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){

    return (
      <section className = 'container'>
        <Cabecalho/>

        <Busca
          busca={this.state.busca}
          buscaODA={this.buscaODA} 
        />

        <Lista
          odas={this.state.odas}
        />
        <Rodape/>
      </section>
    
    )
  }
}  

export default App;
