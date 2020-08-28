import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Icon from 'react-bootstrap-icons';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
//import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';

import serverapi from '../serverapi';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {nads: [],err: null,isLoading: true}
      this.getCollection();
    }

   componentDidMount() {
      this.getCollection();
   }

   getCollection() {

      axios.get(serverapi.name + 'nads')
      .then(result => this.setState({
        nads: result.data,
        isLoading: false
      }))
      .catch(err => this.setState({
        err,
        isLoading: false
      }));

   }

    delete(row) {
      axios.get(serverapi.name + 'nads/delete/'+row._id)
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
        if(err) {
            return (
              <div className="container alert alert-danger" style={{ marginTop: 20, marginBotton: 20, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}> Tivemos problemas no servidor de Dados... </div>
            )
        }
        if(isLoading) {
            return (
              <div className="container alert alert-success" style={{ marginTop: 20, marginBotton: 20, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}> Aguarde carregando os dados... </div>
            )
        }


        const columns = [
          {
            dataField: 'numnad',
            text: 'Número',
            filter: textFilter(),
          }, 
          {
            dataField: 'procnad',
            text: 'Processo',
            filter: textFilter(),
          },
          {
            dataField: 'datanad',
            text: 'Data',
            filter: textFilter(),
          },
          {
            dataField: 'nomefav',
            text: 'Favorecido',
            filter: textFilter(),
          },
          {
            dataField: 'valor',
            text: 'Valor',
            filter: textFilter(),
            headerAlign: 'right',
            attrs: { align: 'right' }
          },
          {
            dataField: 'evenad',
            text: 'Evento',
            filter: textFilter(),
          },
          {
            dataField: 'unigest', 
            text: 'Unidade',
            filter: textFilter(),
          },
          {
            dataField: 'progtrab',
            text: 'Programa',
            filter: textFilter(),
          },
          {
            dataField: 'natdesp',
            text: 'Natureza',
            filter: textFilter(),
          },
          {
            dataField: 'fontrec',
            text: 'Fonte',
            filter: textFilter(false),

          },
          {
            text: 
              <div className="form-row">
                  <div className="col-sm-4">
                    Ação
                  </div> 
                  <div className="col-sm-3">
                    <Link to={'/createNad'} className="btn btn-sm btn-success"><Icon.PlusSquareFill/></Link>
                  </div> 
              </div>
            ,
            formatter: (cellContent, row) => (
              <div className="form-row">
                  <div className="col-sm-3">
                      <Link to={"/printNad/"+row._id} className="btn btn-sm btn-secondary"><Icon.Printer/></Link>                
                  </div> 

                  <div className="col-sm-3">
                      <Link to={"/cloneNad/"+row._id} className="btn btn-sm btn-warning"><Icon.CloudPlus/></Link>                
                  </div> 
                  <div className="col-sm-3">
                      <Link to={"/editNad/"+row._id} className="btn btn-sm btn-primary"><Icon.PencilSquare/></Link>
                  </div> 
                  <div className="col-sm-3">
                      <button onClick={() => this.delete(row)} className="btn btn-sm btn-danger"><Icon.TrashFill/></button>
                  </div> 
              </div>
            ),
            style:{
              width: '10%'
            }
          }
        ];

        // const { SearchBar, ClearSearchButton } = Search;
        // const { ExportCSVButton } = CSVExport;

        const options = {
          paginationSize: 3,
          pageStartIndex: this.pageCurrentIndex,
          sizePerPageList: [
                {
                  text: '4', value: 4
                },
                {
                  text: '8', value: 8
                },
                {
                  text: '16', value: 16
                },
                {
                  text: '32', value: 32
                }
            ] 

        };
              
        return (
          <div className="container" style={{ marginTop: 20, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>
              <div className="form-row">
                  <ToastContainer />
                  <div className="col-sm-11">
                    <h3 align="center">Autorização de Despesa</h3>
                  </div>
              </div>

              {/* <ToolkitProvider
                keyField="id"
                data={ this.state.nads } 
                columns={ columns }
                search
              >
                {
                  props => (
                    <div>
                      <h3>Input something at below input field:</h3>
                      <SearchBar { ...props.searchProps } />
                      <ClearSearchButton { ...props.searchProps } />
                      <hr />
                      <BootstrapTable
                        { ...props.baseProps }
                      />
                      <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
                    </div>
                  )
                }
              </ToolkitProvider>
              */}
              <BootstrapTable 
                  keyField='_id' 
                  data={ this.state.nads } 
                  columns={ columns } 
                  pagination={ paginationFactory(options) }
                  filter={ filterFactory() }
                  hover
                  wrapperClasses="table-responsive"
              /> 
          </div>
        );
      }
  }