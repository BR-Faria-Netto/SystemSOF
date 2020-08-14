import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import serverapi from '../serverapi';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {tipo: []};
    }
    componentDidMount(){
      axios.get(serverapi.name+'unidgestoras')
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

      axios.get(serverapi.name+'unidgestoras')
      .then(response => {
        this.setState({ tipo: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

      return (
        <div>
          <h3 align="center">Relação de Unidade Gestora</h3>
          <table className="table table-hover"> 
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descrição</th>
                <th>Opções:</th>
                <th><Link to={'/createUnidGestora'} class="btn btn-sm btn-primary">Incluir</Link></th>
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