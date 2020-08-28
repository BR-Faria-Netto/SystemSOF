import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Icon from 'react-bootstrap-icons';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import serverapi from '../serverapi';

var contador = 0;

export default class Index extends Component {


  constructor(props) {
      super(props);
      // Initialize state first
      this.state = {
        tipos: [],
        err: null,
        isLoading: true
      }
      this.getCollection();
   }

   componentDidMount() {
      this.getCollection();
   }

   getCollection() {
      axios.get(serverapi.name+'tablecode/'+this.props.match.params.dbTable)
      .then(result => this.setState({
        tipos: result.data,
        isLoading: false
      }))
      .catch(err => this.setState({
        err,
        isLoading: false
      }));
  }


  delete(row) {
     axios.get(serverapi.name+'tablecode/delete/'+this.props.match.params.dbTable+'/'+row._id)
     .then(
       toast.warning("Registro foi excluido com successo")
     )
     .catch(error => {
       toast.error("Ocorrou erro ao excluir o registro");
     })
     this.getCollection()
  }

  render() {

      let { err, isLoading} = this.state;
  
      if (err) {
            return (
              <div className="container alert alert-danger" style={{ marginTop: 20, marginBotton: 20, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}> Tivemos problemas no servidor de Dados... </div>
          )
      }

      if(isLoading) {
        return (
          <div className="container alert alert-success" style={{ marginTop: 20, marginBotton: 20, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}> Aguarde carregando os dados...</div>
        )
      }
    
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
        
        <div className="container" style={{ marginTop: 20, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>
          <ToastContainer />
          <h3 align="center">Relação de {this.props.match.params.pgTitle}  {contador} </h3>
          <BootstrapTable 
              keyField='id' 
              data={ this.state.tipos } 
              columns={ columns } 
              pagination={ paginationFactory()}
              hover
              condensed
              />
        </div>
      );
    }
  }

