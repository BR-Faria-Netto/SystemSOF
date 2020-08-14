import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import serverapi from '../serverapi';

import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {tipo: []};
    }
    componentDidMount(){
      axios.get(serverapi.name+'tipoempenhos')
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

    handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({activePage: pageNumber});
    }
    render() {

      axios.get(serverapi.name+'tipoempenhos')
      .then(response => {
        this.setState({ tipo: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })


      return (
        <div>
          <h3 align="center">Tipo de Empenho</h3>
          <table className="table table-hover"> 
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descrição</th>
                <th>Opções:</th>
                <th><Link to={'/createTipoEmpenho'} class="btn btn-sm btn-primary">Incluir</Link></th>
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