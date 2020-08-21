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
      this.state = {ndcs: []};
      this.pageCurrentIndex = 1;
    }

    getCollection() {
      axios.get(serverapi.name + 'ndcs')
      .then(response => {
        this.setState({ ndcs: response.data });
      })
      .catch(function (error) {
        toast.error("Ocorrou erro de conexão com o servidor!")
      })
    }

    delete(row) {
      axios.get(serverapi.name + 'ndcs/delete/'+row._id)
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
          dataField: 'numndc',
          text: 'Número',
          filter: textFilter(),
        }, 
        {
          dataField: 'procndc',
          text: 'Processo',
          filter: textFilter(),
        },
        {
          dataField: 'datandc',
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
          dataField: 'evendc',
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
                   <Link to={'/createndc'} className="btn btn-sm btn-success"><Icon.PlusSquareFill/></Link>
                 </div> 
             </div>
           ,
           formatter: (cellContent, row) => (
             <div className="form-row">
                 <div className="col-sm-4">
                     <Link to={"/printNdc/"+row._id} className="btn btn-sm btn-warning"><Icon.Printer/></Link>                
                 </div> 
                 <div className="col-sm-4">
                     <Link to={"/cloneNdc/"+row._id} className="btn btn-sm btn-warning"><Icon.CloudPlus/></Link>                
                 </div> 
                 <div className="col-sm-4">
                     <Link to={"/editNdc/"+row._id} className="btn btn-sm btn-primary"><Icon.PencilSquare/></Link>
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
        <div className="container" style={{ marginTop: 50, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>
            <div className="form-row">
                <ToastContainer />
                <div className="col-sm-11">
                  <h3 align="center">Descentralização de Credito</h3>
                </div>
            </div>

            {/* <ToolkitProvider
              keyField="id"
              data={ this.state.ndcs } 
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
                data={ this.state.ndcs } 
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