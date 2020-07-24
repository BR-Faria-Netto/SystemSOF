import React, { Component } from 'react';
import axios from 'axios';

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
      axios.get('http://localhost:4000/fonterecursos/edit/'+this.props.match.params.id)
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
    axios.post('http://localhost:4000/fonterecursos/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/indexFonteRecurso');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Alteração da Fonte de Recurso</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <div className="col-sm-6">
                      <label>Codigo:  </label>
                      <input type="text" className="form-control" value={this.state.codigo} onChange={this.onChangeCodigo}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-6">
                    <label>Descricao: </label>
                      <input type="text" className="form-control" value={this.state.descricao} onChange={this.onChangeDescricao}/>
                    </div>
                </div>
                <div></div>
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