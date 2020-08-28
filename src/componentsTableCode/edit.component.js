import React, { Component } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import serverapi from '../serverapi';

export default class Edit extends Component {
       constructor(props) {
          super(props);
          this.onChangeCodigo = this.onChangeCodigo.bind(this);
          this.onChangeDescricao = this.onChangeDescricao.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
          this.state = {
               codigo: '',
               descricao: ''
          }
       }

componentDidMount() {
      axios.get(serverapi.name+'tableCode/edit/'+this.props.match.params.dbTable+'/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                codigo: response.data.codigo, 
                descricao: response.data.descricao });
          })
          .catch(function (error) {
              console.log(error);
          })
}

onChangeCodigo(e) {
    this.setState({
      codigo: e.target.value
    });
}

onChangeDescricao(e) {
    this.setState({
      descricao: e.target.value
    })  
}
    
onSubmit(e) {
    e.preventDefault();
    const obj = {
      codigo: this.state.codigo,
      descricao: this.state.descricao
    };
    axios.post(serverapi.name+'tablecode/update/'+this.props.match.params.dbTable+'/'+this.props.match.params.id, obj)
    .then(res => {
      toast.success("Registro foi salvo com successo");
    })
    .catch(error => {
      toast.error("Ocorrou erro ao salvar o registro");
    })
    this.props.history.push('/indexTableCode/'+this.props.match.params.dbTable+'/'+this.props.match.params.pgTitle);
}
 
render() {
    return (
        <div className="container" style={{ marginTop: 20, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>
            <h3 align="center">Alteração de {this.props.match.params.pgTitle}</h3>
            <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <div className="col-sm-1">
                        <label>Codigo:  </label>
                        <input type="text" className="form-control" value={this.state.codigo} onChange={this.onChangeCodigo}/>
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="col-sm-6">
                      <label>Descrição: </label>
                        <input type="text" className="form-control" value={this.state.descricao} onChange={this.onChangeDescricao}/>
                      </div>
                  </div>
                  <hr></hr>
                  <div className="form-group">
                      <ToastContainer />
                      <input type="submit" value="Salvar" className="btn btn-primary"/>
                  </div>
            </form>
        </div>
      )
  }
}