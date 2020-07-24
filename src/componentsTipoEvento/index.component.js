import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {tipo: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/tipoeventos')
        .then(response => {
          this.setState({ tipo: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.tipo.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {

      axios.get('http://localhost:4000/tipoeventos')
      .then(response => {
        this.setState({ tipo: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

      return (
        <div>
          <h3 align="center">Tipo de Eventos</h3>
          <table className="table table-hover"> 
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descrição</th>
                <th>Opções:</th>
                <th><Link to={'/createTipoEvento'} class="btn btn-sm btn-primary">Incluir</Link></th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }