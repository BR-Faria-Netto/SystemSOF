import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

import serverapi from '../serverapi';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {nads: []};
    }
    componentDidMount(){
      axios.get(serverapi.name + 'nads')
        .then(response => {
          this.setState({ nads: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.nads.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {

      axios.get(serverapi.name + 'nads')
      .then(response => {
        this.setState({ nads: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

      return (
        <div>
          <h3 align="center">Relação de Autorização de Despesa</h3>
          <table className="table table-hover" style={{ marginTop: 20, border:2}}> 
            <thead>
              <tr>
                <th>Numero</th>
                <th>Processo</th>
                <th>Data</th>
                <th>Favorecido</th>
                <th>Valor</th>
                <th>Evento</th>
                <th>Unidade Gestora</th>
                <th>Programa Trabalho</th>
                <th>Natureza Despesa</th>
                <th>Fonte Recurso</th>
                <th>Opções</th>
                <th><Link to={'/createNad'} className="btn btn-sm btn-primary">Incluir</Link></th>
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