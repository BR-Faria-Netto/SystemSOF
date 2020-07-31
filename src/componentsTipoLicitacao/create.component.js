import React, { Component } from 'react';
import axios from 'axios';
import serverapi from '../serverapi';

export default class Create extends Component {
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

    axios.post(serverapi.name+'tipolicitacoes/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      codigo: '',
      descricao: ''
    })

    this.props.history.push('/indexTipoLicitacao');
  
  }

  renderOptions(option_items) {
    if(option_items) {
        return Object.entries(option_items).map(function (item) {
            return <option key={item[0]} value={item[0]}>{item[1]}</option>
        })
    }
  }

  render() {

    
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Inclusão de Tipo de Licitação</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Codigo:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.codigo}
                      onChange={this.onChangeCodigo}
                      />
                </div>
                <div className="form-group">
                    <label>Descrição: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.descricao}
                      onChange={this.onChangeDescricao}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Salvar" 
                      className="btn btn-primary"/>
                </div>

            </form>
        </div>
    )
  }
}

