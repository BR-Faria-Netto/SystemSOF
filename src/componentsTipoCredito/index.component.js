import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import serverapi from '../serverapi';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {tipo: []};
    }
    //componentDidMount(){
      //this.getCollection();
    //}

    getCollection() {

      axios.get(serverapi.name+'tipocreditos')
      .then(response => {
        this.setState({ tipo: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

    }

    delete(row) {
       axios.get(serverapi.name+'tipocreditos/delete/'+row._id)
           .then(console.log('Deleted'))
           .catch(err => console.log(err))
  
         //this.getCollection();
      
    }
   
    render() {

      this.getCollection();

      const columns = [
            {
              dataField: 'codigo',
              text: 'Codigo'
            }, 
            {
              dataField: 'descricao',
              text: 'Descrição'
            },
            {
              text:  'Ações',
              formatter: (cellContent, row) => (
                <Link to={"/editTipoCredito/"+row._id} className="btn btn-sm btn-primary">Alterar</Link>
              ),
            },
            {
              formatter: (cellContent, row) => (
                <button onClick={() => this.delete(row)} className="btn btn-sm btn-danger">Excluir</button>
              ),
            },
      ];

      return (
        <div>
          <h3 align="center">Relação de Tipo de Credito</h3>
          <Link to={'/createTipoCredito'} class="btn btn-sm btn-primary">Incluir</Link>
          <BootstrapTable 
              keyField='id' 
              data={ this.state.tipo } 
              columns={ columns } 
              pagination={ paginationFactory()}
              hover
              condensed
              />
        </div>
      );
    }
  }

