import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Icon from 'react-bootstrap-icons';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import serverapi from '../serverapi';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {tipo: []};
    }
  
    getCollection() {

      axios.get(serverapi.name+'tablecode/'+this.props.match.params.dbTable)
      .then(response => {
        this.setState({ tipo: response.data });
      })
      .catch(function (error) {
        toast.error("Ocorrou erro de conexão com o servidor!")
      })

    }

    delete(row) {
      axios.get(serverapi.name+'tablecode/delete/'+this.props.match.params.dbTable+'/'+row._id)
      .then(
        toast.warning("Registro foi excluido com successo")
      )
      .catch(error => {
        toast.error("Ocorrou erro ao excluir o registro");
      })
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
              text: 
                <div className="form-row">
                    <div className="col-sm-4">
                      Ação
                    </div> 
                    <div className="col-sm-3">
                      <Link to={'/createTableCode/'+this.props.match.params.dbTable+'/'+this.props.match.params.pgTitle} className="btn btn-sm btn-success"><Icon.PlusSquareFill/></Link>
                    </div> 
                </div>
              ,
              formatter: (cellContent, row) => (
                <div className="form-row">
                    <div className="col-sm-4">
                        <Link to={'/editTableCode/'+this.props.match.params.dbTable+'/'+row._id+'/'+this.props.match.params.pgTitle} className="btn btn-sm btn-primary"><Icon.PencilSquare/></Link> 
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

      return (
        <div className="container" style={{ marginTop: 50, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>
          <ToastContainer />
          <h3 align="center">Relação de {this.props.match.params.pgTitle}</h3>
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

