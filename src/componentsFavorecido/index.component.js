import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import serverapi from '../serverapi';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {favorecidos: []};
    }
    componentDidMount(){
      axios.get(serverapi.name+'favorecidos')
        .then(response => {
          this.setState({ favorecidos: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.favorecidos.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {

      axios.get(serverapi.name+'favorecidos')
      .then(response => {
        this.setState({ favorecidos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

      return (
        <div>
          <h3 align="center">Relação de Favorecidos</h3>
          <table className="table table-hover" style={{ marginTop: 20}}> 
            <thead>
              <tr>
                <th>Favorecido</th>
                <th>Cnpj/Cpf</th>
                <th>Endereço</th>
                <th>Cidade</th>
                <th>Bairro</th>
                <th>Opções</th>
                <th><Link to={'/createFavorecido'} className="btn btn-sm btn-primary">Incluir</Link></th>
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