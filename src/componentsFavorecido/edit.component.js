import React, { Component } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import serverapi from '../serverapi';

export default class Edit extends Component {

  constructor(props) {
    super(props);

    this.onChangeNomefav = this.onChangeNomefav.bind(this); 
    this.onChangeBai = this.onChangeBai.bind(this); 
    this.onChangeEnder = this.onChangeEnder.bind(this);
    this.onChangeCid = this.onChangeCid.bind(this); 
    this.onChangeCep = this.onChangeCep.bind(this); 
    this.onChangeUf = this.onChangeUf.bind(this); 
    this.onChangeCnpj = this.onChangeCnpj.bind(this); 
    this.onChangeAgerec = this.onChangeAgerec.bind(this); 
    this.onChangeBanrec = this.onChangeBanrec.bind(this); 
    this.onChangeCcrec = this.onChangeCcrec.bind(this); 

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      nomefav : '',
      bai : '',
      ender : '',
      cid : '',
      cep : '',
      uf : '',
      cnpj : '',
      agerec : '',
      banrec : '',
      ccrec : ''
    }

  }
  
  componentDidMount() {
      axios.get(serverapi.name+'favorecidos/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                nomefav : response.data.nomefav,
                bai : response.data.bai,
                ender : response.data.ender,
                cid : response.data.cid,
                cep : response.data.cep,
                uf : response.data.uf,
                cnpj : response.data.cnpj,
                banrec : response.data.banrec,
                agerec : response.data.agerec,
                ccrec : response.data.ccrec
              });
          })
          .catch(function (error) {
              console.log(error);
          })

    }
 
    onChangeNomefav(e) {
      this.setState({
        nomefav: e.target.value
      })  
    }
  
    onChangeBai(e) {
      this.setState({
        bai: e.target.value
      })  
    }
  
    onChangeEnder(e) {
      this.setState({
        ender: e.target.value
      })  
    }
  
    onChangeCid(e) {
      this.setState({
        cid: e.target.value
      })  
    }
  
    onChangeCep(e) {
      this.setState({
        cep: e.target.value
      })  
    }
  
    onChangeUf(e) {
      this.setState({
        uf: e.target.value
      })  
    }
  
    onChangeCnpj(e) {
      this.setState({
        cnpj: e.target.value
      })  
    }
  
    onChangeAgerec(e) {
      this.setState({
        agerec: e.target.value
      })  
    }
  
    onChangeBanrec(e) {
      this.setState({
        banrec: e.target.value
      })  
    }
  
    onChangeCcrec(e) {
      this.setState({
        ccrec: e.target.value
      })  
    }
    
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nomefav : this.state.nomefav,
      bai : this.state.bai,
      ender : this.state.ender,
      cid : this.state.cid,
      cep : this.state.cep,
      uf : this.state.uf,
      cnpj : this.state.cnpj,
      banrec : this.state.banrec,
      agerec : this.state.agerec,
      ccrec : this.state.ccrec
    };

    axios.post(serverapi.name+'favorecidos/update/'+this.props.match.params.id, obj)
    .then(res => {
      toast.success("Registro foi salvo com successo");
    })
    .catch(error => {
      toast.error("Ocorrou erro ao salvar o registro");
    })
    
    this.props.history.push('/indexFavorecido');
  }

  render() {

    return (
        <div className="container" style={{ marginTop: 50, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>
            <form onSubmit={this.onSubmit}>

              <div className="col-sm-6 ">
                   <h3>Alteração de Favorecido</h3>
              </div>
    
              <div className="form-row">
                <div className="col-sm-12">
                  <label>Nome do Favorecido:</label>  
                  <input id="nomefav" name="nomefav" className="form-control input-md" required="" type="text" value={this.state.nomefav} onChange={this.onChangeNomefav} />
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-12">
                  <label>Endereço</label>  
                  <input id="ender" name="ender" className="form-control input-md" required="" type="text" value={this.state.ender} onChange={this.onChangeEnder} />
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-4">
                  <label>Bairro</label>  
                  <input id="bai" name="bai" className="form-control input-md" required="" type="text" value={this.state.bai} onChange={this.onChangeBai}/>
                </div>
                <div className="col-sm-4">
                  <label>Cidade</label>  
                  <input id="cid" name="cid" className="form-control input-md" required="" type="text" value={this.state.cid} onChange={this.onChangeCid}/>
                </div>
                <div className="col-sm-2">
                  <label>Cep</label>  
                  <input id="cep" name="cep" className="form-control input-md" required="" type="text" value={this.state.cep} onChange={this.onChangeCep}/>
                </div>
                <div className="col-sm-2">
                  <label>Estado</label>  
                  <input id="uf" name="uf" className="form-control input-md" required="" type="text" value={this.state.uf} onChange={this.onChangeUf}/>
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-3">
                  <label>Cnpj/Cpf:</label>  
                  <input id="cnpj" name="cnpj" className="form-control input-md" required="" type="text" value={this.state.cnpj} onChange={this.onChangeCnpj}/>
                </div>
                <div className="col-sm-3">
                  <label>Banco</label>  
                  <input id="banrec" name="banrec" className="form-control input-md" required="" type="text" value={this.state.banrec} onChange={this.onChangeBanrec}/>
                </div>
                <div className="col-sm-2">
                  <label>Agencia</label>  
                  <input id="agerec" name="agerec" className="form-control input-md" required="" type="text" value={this.state.agerec} onChange={this.onChangeAgerec}/>
                </div>
                <div className="col-sm-4">
                  <label>Conta Corrente</label>  
                  <input id="ccrec" name="ccrec" className="form-control input-md" required="" type="text" value={this.state.ccrec} onChange={this.onChangeCcrec}/>
                </div>
              </div>

              <hr></hr>
              <div className="form-row">
                  <ToastContainer />
                  <div className="col-sm-1">
                      <input type="submit" value="Salvar" className="btn btn-primary"/>
                  </div>
              </div>
          </form>
      </div>
    )
  }
}