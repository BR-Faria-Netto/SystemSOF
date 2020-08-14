import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as Icon from 'react-bootstrap-icons';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import serverapi from '../serverapi';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {favorecidos: []};
    }

    getCollection() {
      axios.get(serverapi.name+'favorecidos')
      .then(response => {
        this.setState({ favorecidos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    delete(row) {
      axios.get(serverapi.name+'favorecidos/delete/'+row._id)
          .then(console.log('Deleted'))
          .catch(err => console.log(err))
    }

    render() {

      this.getCollection();

      const columns = [
        {
          dataField: 'nomefav',
          text: 'Favorecido',
          filter: textFilter()
        },
        {
          dataField: 'cnpj',
          text: 'Cnpj/Cpf',
          filter: textFilter()

        },
        {
          dataField: 'ender',
          text: 'Endereço',
          filter: textFilter()

        },
        {
          dataField: 'bai', 
          text: 'Bairro',
          filter: textFilter()

        },
        {
          dataField: 'cid',
          text: 'Cidade',
          filter: textFilter()
          

        },
        {
          text: 
            <div className="form-row">
                <div className="col-sm-4">
                  Ação
                </div> 
                <div className="col-sm-3">
                  <Link to={'/createFavorecido'} className="btn btn-sm btn-success"><Icon.PlusSquareFill/></Link>
                </div> 
            </div>
          ,
          formatter: (cellContent, row) => (
            <div className="form-row">
                <div className="col-sm-4">
                    <Link to={"/editFavorecido/"+row._id} className="btn btn-sm btn-primary"><Icon.PencilSquare/></Link>
                </div> 
                <div className="col-sm-4">
                    <button onClick={() => this.delete(row)} className="btn btn-sm btn-danger"><Icon.TrashFill/></button>
                </div> 
            </div>
          ),
          style:{
            width: '9%'
          }

        }
      ];

      const options = {
         paginationSize: 3,
         pageStartIndex: 1,
         sizePerPageList: [
              {
                text: '8', value: 8
              },
              {
                text: '16', value: 16
              },
              {
                text: '32', value: 32
              },
              {
                text: '64', value: 64
              }
          ] 

      };

      return (
        <div className="container" style={{ marginLef: 50, marginTop: 40, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>
            <div className="form-row">
                <div className="col-sm-11">
                  <h3 align="center">Relação de Favorecidos</h3>
                </div>
                <div className="col-sm-1">
                </div> 
            </div>
            <BootstrapTable 
                keyField='_id' 
                data={ this.state.favorecidos } 
                columns={ columns } 
                pagination={ paginationFactory(options) }
                filter={ filterFactory() }
                hover
                condensed
                hover
              />
        </div>
      );
    }
  }