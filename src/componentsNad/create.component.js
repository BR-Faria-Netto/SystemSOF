import React, { Component } from 'react';
import axios from 'axios';
import serverapi from '../serverapi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from "moment";

import CurrencyInput from '../componentsCurrency/CurrencyInput'
import InputMask from 'react-input-mask';
const valorExtenso = require('numero-por-extenso');


var optionstipoeventos = [];
axios.get(serverapi.name+'tablecode/tipoeventos').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionstipoeventos.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

var optionsgrupodespesas = [];
axios.get(serverapi.name + 'tablecode/grupodespesas').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionsgrupodespesas.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

var optionsunidgestoras = [];
axios.get(serverapi.name + 'tablecode/unidgestoras').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionsunidgestoras.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

var optionsunidorcamentarias = [];
axios.get(serverapi.name + 'tablecode/unidorcamentarias').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionsunidorcamentarias.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

var optionsprogtrabalhos = [];
axios.get(serverapi.name + 'tablecode/progtrabalhos').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionsprogtrabalhos.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

var optionsnaturezadespesas = [];
axios.get(serverapi.name + 'tablecode/naturezadespesas').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionsnaturezadespesas.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

var optionsfonterecursos = [];
axios.get(serverapi.name + 'tablecode/fonterecursos').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionsfonterecursos.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

var optionsfavorecidos = [];
optionsfavorecidos.push({ value:  '', label: 'Selecione o Favorecido', id: 0});
axios.get(serverapi.name + 'favorecidos').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionsfavorecidos.push({ value: (key, value.nomefav), label: (key, value.nomefav ), id: (key, value._id )});
  });
});

var optionstipocreditos = [];
axios.get(serverapi.name + 'tablecode/tipocreditos').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionstipocreditos.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

var optionstipoempenhos = [];
axios.get(serverapi.name + 'tablecode/tipoempenhos').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionstipoempenhos.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

var optionstipolicitacoes = [];
axios.get(serverapi.name + 'tablecode/tipolicitacoes').then(resp => {
  Object.entries(resp.data).forEach(entry => {
    const [key, value] = entry;
    optionstipolicitacoes.push({ value: (key, value.descricao), label: (key, value.descricao )});
  });
});

export default class Create extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeNumnad = this.onChangeNumnad.bind(this);
    this.onChangeProcnad = this.onChangeProcnad.bind(this);
    this.onChangeDatanad = this.onChangeDatanad.bind(this);
    this.onChangeEvenad = this.onChangeEvenad.bind(this);
    this.onChangeCatgast = this.onChangeCatgast.bind(this); 
    this.onChangeAdant = this.onChangeAdant.bind(this);  
    this.onChangeSecret = this.onChangeSecret.bind(this); 
    this.onChangeUnigest = this.onChangeUnigest.bind(this);
    this.onChangeUniorc = this.onChangeUniorc.bind(this); 
    this.onChangeProgtrab = this.onChangeProgtrab.bind(this); 
    this.onChangeNatdesp = this.onChangeNatdesp.bind(this); 
    this.onChangeFontrec = this.onChangeFontrec.bind(this); 
    this.onChangeTipcre = this.onChangeTipcre.bind(this); 
    this.onChangeBanpag = this.onChangeBanpag.bind(this); 
    this.onChangeAgepag = this.onChangeAgepag.bind(this); 
    this.onChangeCcpag = this.onChangeCcpag.bind(this); 
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
    this.onChangeValor = this.onChangeValor.bind(this); 
    this.onChangeTipemp = this.onChangeTipemp.bind(this);
    this.onChangeExtenso = this.onChangeExtenso.bind(this);
    this.onChangeDescdesp = this.onChangeDescdesp.bind(this); 
    this.onChangeJan = this.onChangeJan.bind(this);  
    this.onChangeFev = this.onChangeFev.bind(this);  
    this.onChangeMar = this.onChangeMar.bind(this);  
    this.onChangeAbr = this.onChangeAbr.bind(this);  
    this.onChangeMai = this.onChangeMai.bind(this);  
    this.onChangeJun = this.onChangeJun.bind(this);  
    this.onChangeJul = this.onChangeJul.bind(this);  
    this.onChangeAgo = this.onChangeAgo.bind(this);  
    this.onChangeSet = this.onChangeSet.bind(this);  
    this.onChangeOut = this.onChangeOut.bind(this);  
    this.onChangeNov = this.onChangeNov.bind(this);  
    this.onChangeDez = this.onChangeDez.bind(this);  
    this.onChangeTiplic = this.onChangeTiplic.bind(this);  
    this.onChangeDataabert = this.onChangeDataabert.bind(this);  
    this.onChangeNumerolic = this.onChangeNumerolic.bind(this);  
    this.onChangeBaselegal = this.onChangeBaselegal.bind(this);  
    this.onChangeEmissor = this.onChangeEmissor.bind(this);  
    this.onChangeDeleemi = this.onChangeDeleemi.bind(this);  
    this.onChangeMatemi = this.onChangeMatemi.bind(this);  
    this.onChangeDataemi = this.onChangeDataemi.bind(this); 
    this.onChangeOrdenador = this.onChangeOrdenador.bind(this);  
    this.onChangeDeleord = this.onChangeDeleord.bind(this);  
    this.onChangeMatord = this.onChangeMatord.bind(this);  
    this.onChangeDataord = this.onChangeDataord.bind(this);  
    this.onChangeRatificador = this.onChangeRatificador.bind(this);  
    this.onChangeMatrat = this.onChangeMatrat.bind(this);  
    this.onChangeDelerat = this.onChangeDelerat.bind(this); 
    this.onChangeDatarat = this.onChangeDatarat.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);

    var data = moment(new Date()).format("DD/MM/YYYY");
   
    this.state = {
      numnad : '00000',
      procnad : 'SEI/001/000.00/0000',
      datanad : data,
      evenad  : optionstipoeventos[0].label,
      catgast  : optionsgrupodespesas[0].label,
      adant  : 'Não',
      secret  : 'Secretária de Estado de Saúde - SES',
      unigest : optionsunidgestoras[0].label,
      uniorc  : optionsunidorcamentarias[0].label,
      progtrab : optionsprogtrabalhos[0].label,
      natdesp : optionsnaturezadespesas[0].label,
      fontrec : optionsfonterecursos[0].label,
      tipcre : optionstipocreditos[0].label,
      banpag : '',
      agepag : '',
      ccpag : '',
      nomefav : '',
      bai : '',
      ender : '',
      cid : '',
      cep : '',
      uf : '',
      cnpj : '',
      agerec : '',
      banrec : '',
      ccrec : '',
      valor : '0,00',
      tipemp : optionstipoempenhos[0].label,
      extenso : '',
      descdesp : '',
      jan : '0,00',
      fev : '0,00',
      mar : '0,00',
      abr : '0,00',
      mai : '0,00',
      jun : '0,00',
      jul : '0,00',
      ago : '0,00',
      set : '0,00',
      out : '0,00',
      nov : '0,00',
      dez : '0,00',
      tiplic : optionstipolicitacoes[0].label,
      dataabert : '',
      numerolic : '',
      baselegal : '',
      emissor : '',
      deleemi : '',
      matemi : '',
      dataemi : '',
      ordenador : '',
      deleord : '',
      matord : '',
      dataord : '',
      ratificador : '',
      delerat : '',
      matrat : '',
      datarat : ''
    }
  }

  onChangeNumnad(e) {
    this.setState({
      numnad: e.target.value
    });
  }
  onChangeProcnad(e) {
    this.setState({
      procnad: e.target.value
    })  
  }
  onChangeDatanad(e) {
    this.setState({
      datanad: e.target.value
    })  
  }
  onChangeEvenad(e) { 
    this.setState({
      evenad: e.target.value
    })  
  }

  onChangeCatgast(e) {
    this.setState({
      catgast: e.target.value
    })  
  }

  onChangeAdant(e) {
    this.setState({
      adant: e.target.value
    })  
  }

  onChangeSecret(e) {
    this.setState({
      secret: e.target.value
    })  
  }

  onChangeUnigest(e) {
    this.setState({
      unigest: e.target.value
    })  
  }

  onChangeUniorc(e) {
    this.setState({
      uniorc: e.target.value
    })  
  }

  onChangeProgtrab(e) {
    this.setState({
      progtrab: e.target.value
    })  
  }

  onChangeNatdesp(e) {
    this.setState({
      natdesp: e.target.value
    })  
  }

  onChangeFontrec(e) {
    this.setState({
      fontrec: e.target.value
    })  
  }

  onChangeTipcre(e) {
    this.setState({
      tipcre: e.target.value
    })  
  }

  onChangeBanpag(e) {
    this.setState({
      banpag: e.target.value
    })  
  }

  onChangeAgepag(e) {
    this.setState({
      agepag: e.target.value
    })  
  }

  onChangeCcpag(e) {
    this.setState({
      ccpag: e.target.value
    })  
  }

  onChangeNomefav(e) {
    // ta feio mas funciona
    let key = optionsfavorecidos.find(o => o.label === e.target.value).id;
    axios.get(serverapi.name + 'favorecidos/edit/'+key)
        .then(response => {
          this.setState({
              nomefav: response.data.nomefav,
              bai : response.data.bai,
              ender : response.data.ender,
              cid : response.data.cid,
              cep : response.data.cep,
              uf : response.data.uf,
              cnpj : response.data.cnpj,
              banrec : response.data.banrec,
              agerec : response.data.agerec,
              ccrec : response.data.ccrec,
          });
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

  onChangeValor(e) {
    this.setState({
      valor: e.target.value
    })  
    this.setState({
      extenso: valorExtenso.porExtenso(e.target.value.toString().split(".").join("").split(",").join("."), valorExtenso.estilo.monetario)
    })  
  }

  onChangeExtenso(e) {
    this.setState({
      extenso: e.target.value
    })  
  }

  onChangeDescdesp(e) {
    this.setState({
       descdesp: e.target.value
    })  
  }
    
  onChangeTipemp(e) {
    this.setState({
      tipemp: e.target.value
    })  
  }

  onChangeJan(e) {
    this.setState({
      jan: e.target.value
    })  
  }
    
  onChangeFev(e) {
    this.setState({
      fev: e.target.value
    })  
  }

  onChangeMar(e) {
    this.setState({
      mar: e.target.value
    })  
  }

  onChangeMai(e) {
    this.setState({
      mai: e.target.value
    })  
  }

  onChangeAbr(e) {
    this.setState({
      abr: e.target.value
    })  
  }

  onChangeJul(e) {
    this.setState({
      jul: e.target.value
    })  
  }

  onChangeJun(e) {
    this.setState({
      jun: e.target.value
    })  
  }

  onChangeSet(e) {
    this.setState({
      set: e.target.value
    })  
  }

  onChangeAgo(e) {
    this.setState({
      ago: e.target.value
    })  
  }

  onChangeNov(e) {
    this.setState({
      nov: e.target.value
    })  
  }

  onChangeDez(e) {
    this.setState({
      dez: e.target.value
    })  
  }

  onChangeTiplic(e) {
    this.setState({
      tiplic: e.target.value
    })  
  }

  onChangeOut(e) {
    this.setState({
      out: e.target.value
    })  
  }

  onChangeDataabert(e) {
    this.setState({
      dataabert: e.target.value
    })  
  }

  onChangeNumerolic(e) {
    this.setState({
      numerolic: e.target.value
    })  
  }

  onChangeBaselegal(e) {
    this.setState({
      baselegal: e.target.value
    })  
  }
  
  onChangeEmissor(e) {
    this.setState({
      emissor: e.target.value
    })  
  }

  onChangeDeleemi(e) {
    this.setState({
      deleemi: e.target.value
    })  
  }
  
  onChangeMatemi(e) {
    this.setState({
      matemi: e.target.value
    })  
  }

  onChangeDataemi(e) {
    this.setState({
      dataemi: e.target.value
    })  
  }

  onChangeOrdenador(e) {
    this.setState({
      ordenador: e.target.value
    })  
  }

  onChangeDeleord(e) {
    this.setState({
      deleord: e.target.value
    })  
  }

  onChangeMatord(e) {
    this.setState({
      matord: e.target.value
    })  
  }

  onChangeDataord(e) {
    this.setState({
      dataord: e.target.value
    })  
  }

  onChangeRatificador(e) {
    this.setState({
      ratificador: e.target.value
    })  
  }

  onChangeMatrat(e) {
    this.setState({
      matrat: e.target.value
    })  
    
  }

  onChangeDelerat(e) {
    this.setState({
      delerat: e.target.value
    })  
  }

  onChangeDatarat(e) {
    this.setState({
      datarat: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      numnad : this.state.numnad,
      procnad : this.state.procnad,
      datanad : this.state.datanad,
      evenad  :  this.state.evenad,
      catgast : this.state.catgast ,
      adant  : this.state.adant ,
      secret  : this.state.secret,
      unigest : this.state.unigest,
      uniorc  : this.state.uniorc,
      progtrab : this.state.progtrab,
      natdesp : this.state.natdesp,
      fontrec : this.state.fontrec,
      tipcre : this.state.tipcre,
      banpag : this.state.banpag,
      agepag : this.state.agepag,
      ccpag : this.state.ccpag,
      nomefav : this.state.nomefav,
      bai : this.state.bai,
      ender : this.state.ender,
      cid : this.state.cid,
      cep : this.state.cep,
      uf : this.state.uf,
      cnpj : this.state.cnpj,
      banrec : this.state.banrec,
      agerec : this.state.agerec,
      ccrec : this.state.ccrec,
      valor : this.state.valor,
      tipemp : this.state.tipemp,
      extenso : this.state.extenso,
      descdesp : this.state.descdesp,
      jan : this.state.jan,
      fev : this.state.fev,
      mar : this.state.mar,
      abr : this.state.abr,
      mai : this.state.mai,
      jun : this.state.jun,
      jul : this.state.jul,
      ago : this.state.ago,
      set : this.state.set,
      out : this.state.out,
      nov : this.state.nov,
      dez : this.state.dez,
      tiplic : this.state.tiplic,
      dataabert : this.state.dataabert,
      numerolic : this.state.numerolic,
      baselegal : this.state.baselegal,
      emissor : this.state.emissor,
      deleemi : this.state.deleemi,
      matemi : this.state.matemi,
      dataemi : this.state.dataemi,
      ordenador : this.state.ordenador,
      deleord : this.state.deleord,
      matord : this.state.matord,
      dataord : this.state.dataord,
      ratificador : this.state.ratificador,
      delerat : this.state.delerat,
      matrat : this.state.matrat,
      datarat : this.state.datarat 
    };

    axios.post(serverapi.name + 'nads/add', obj)
    .then(res => {
      toast.success("Registro foi salvo com successo");
    })
    .catch(error => {
      toast.error("Ocorrou erro ao salvar o registro");
    })

    this.props.history.push('/indexNad');

  }
 
  render() {

    //  function print(data) {
    //    var myWindow = window.open('', 'Impressora');
    //    myWindow.document.write('<html><head><title>Impressão de NAD</title>');
    //    myWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" type="text/css" />');
    //    myWindow.document.write('</head><body >');
    //    myWindow.document.write(document.querySelector(data).innerHTML);
    //    myWindow.document.write('</body></html>');
    //    myWindow.document.close(); 
    //    myWindow.onload=function(){
    //       myWindow.focus(); 
    //       myWindow.print();
    //       myWindow.close();
    //    };
    //  }

    return (
      <div className="container" style={{ marginTop: 50, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>
         <form onSubmit={this.onSubmit}>
            <div id='nad'>
              <div className="form-row">
                <div className="col-sm-6">
                  <h3>Nota de Autorização de Despesa</h3>
                </div>
                <div className="col-sm-1">
                  <label>NAD</label>  
                  <input type="text" id="numnad" className="form-control input-md" value={this.state.numnad} onChange={this.onChangeNumnad}/>
                </div>
                <div className="col-sm-3">
                  <label>Processo</label>  
                  <input type="text" id="procnad" className="form-control input-md" value={this.state.procnad} onChange={this.onChangeProcnad}/>
                </div>
                <div className="col-sm-2">
                  <label>Data</label>  
                  <InputMask mask='99/99/9999' slotChar='mm/dd/yyyy' type="text" id="datanad" className="form-control input-md" value={this.state.datanad} onChange={this.onChangeDatanad}/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-4">
                  <label>Evento da Nad</label>  
                  <select className="form-control" id="evenad" value={this.state.evenad} onChange={this.onChangeEvenad} >
                    {Object.keys(optionstipoeventos).map((t,i) => <option key={i} value={optionstipoeventos[i].label}>{optionstipoeventos[i].label}</option>)}
                  </select>
                </div>
                <div className="col-sm-4">
                  <label>Grudo de Despesas</label>  
                  <select className="form-control" id="catgast" value={this.state.catgast} onChange={this.onChangeCatgast}>
                    {Object.keys(optionsgrupodespesas).map((t,i) => <option key={i} value={optionsgrupodespesas[i].label}>{optionsgrupodespesas[i].label}</option>)}
                  </select>
                </div>
                <div className="col-sm-1">
                    <label>Adiantamento</label>  
                    <select className="form-control" id="adant" value={this.state.adant} onChange={this.onChangeAdant}>
                          <option>Sim</option>
                          <option>Não</option>
                      </select>
                </div>    
              </div>

              <div className="form-row">
                <div className="col-sm-4">
                  <label>Secretaria</label>  
                  <input id="secret" name="secret" className="form-control input-md" type="text" value={this.state.secret} onChange={this.onChangeSecret} />
                </div>
                <div className="col-sm-4">
                  <label>Unidade Gestora</label>  
                  <select className="form-control" id="unigest" value={this.state.unigest} onChange={this.onChangeUnigest}>
                    {Object.keys(optionsunidgestoras).map((t,i) => <option key={i} value={optionsunidgestoras[i].label}>{optionsunidgestoras[i].label}</option>)}
                  </select>
                </div>
                <div className="col-sm-4">
                  <label>Unidade Orçamentaria</label>  
                  <select className="form-control" id="uniorc" value={this.state.uniorc} onChange={this.onChangeUniorc}>
                    {Object.keys(optionsunidorcamentarias).map((t,i) => <option key={i} value={optionsunidorcamentarias[i].label}>{optionsunidorcamentarias[i].label}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-4">
                  <label>Programa de Trabalho</label>  
                  <select className="form-control" id="progtrab" value={this.state.progtrab} onChange={this.onChangeProgtrab}>
                    {Object.keys(optionsprogtrabalhos).map((t,i) => <option key={i} value={optionsprogtrabalhos[i].label}>{optionsprogtrabalhos[i].label}</option>)}
                  </select>
                </div>
                <div className="col-sm-4">
                  <label>Natureza de Despesa</label>  
                  <select className="form-control" id="natdesp" value={this.state.natdesp} onChange={this.onChangeNatdesp}>
                    {Object.keys(optionsnaturezadespesas).map((t,i) => <option key={i} value={optionsnaturezadespesas[i].label}>{optionsnaturezadespesas[i].label}</option>)}
                  </select>
                </div>
                <div className="col-sm-4">
                  <label>Fonte de Recurso</label>  
                  <select className="form-control" id="fontrec" value={this.state.fontrec} onChange={this.onChangeFontrec}>
                    {Object.keys(optionsfonterecursos).map((t,i) => <option key={i} value={optionsfonterecursos[i].label}>{optionsfonterecursos[i].label}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-3">
                  <label>Tipo de Credito</label>  
                  <select className="form-control" id="tipcre" value={this.state.tipcre} onChange={this.onChangeTipcre}>
                    {Object.keys(optionstipocreditos).map((t,i) => <option key={i} value={optionstipocreditos[i].label}>{optionstipocreditos[i].label}</option>)}
                  </select>
                </div>
                <div className="col-sm-2">
                  <label>Banco</label>  
                  <input id="banpag" name="banpag" className="form-control input-md" required="" type="text" value={this.state.banpag} onChange={this.onChangeBanpag}/>
                </div>
                <div className="col-sm-3">
                  <label>Agencia</label>  
                  <input id="agepag" name="agepag" className="form-control input-md" required="" type="text" value={this.state.agepag} onChange={this.onChangeAgepag}/>
                </div>
                <div className="col-sm-4">
                  <label>Conta Corrente</label>  
                  <input id="ccpag" name="ccpag" className="form-control input-md" required="" type="text" value={this.state.ccpag} onChange={this.onChangeCcpag}/>
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-12">
                  <label>Nome do Favorecido:</label>  
                  <select className="form-control" id="nomefav" value={this.state.nomefav} onChange={this.onChangeNomefav}>
                    {Object.keys(optionsfavorecidos).map((t,i) => <option key={i} value={optionsfavorecidos[i].label}>{optionsfavorecidos[i].label}</option>)}
                  </select>
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

              <div className="form-row">
                <div className="col-sm-2">
                  <label>Tipo de Empenho</label>  
                  <select className="form-control" id="tipemp" value={this.state.tipemp} onChange={this.onChangeTipemp}>
                    {Object.keys(optionstipoempenhos).map((t,i) => <option key={i} value={optionstipoempenhos[i].label}>{optionstipoempenhos[i].label}</option>)}
                  </select>
                </div>
                <div className="col-sm-2" style={{ textAlign: 'right' }}>
                  <label>Valor</label>  
                  <CurrencyInput placeholder="0,00" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.valor} onChange={this.onChangeValor}/>
                </div>
                <div className="col-sm-8">
                  <label>Extenso</label>  
                  <input id="extenso" name="estenso" className="form-control input-md" required="" type="text" value={this.state.extenso} onChange={this.onChangeExtenso}/>
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-12">
                  <label>Descrição da Despesa</label>  
                  <input id="descdesp" name="descdesp" className="form-control input-md" required="" type="text" value={this.state.descdesp} onChange={this.onChangeDescdesp}/>
                </div>
              </div>

              <div className="form-row" style={{ textAlign: 'right' }}>
                  <div className="col-sm-2">
                    <label>Janeiro</label>  
                    <CurrencyInput placeholder="0,00" id="jan" name="jan" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.jan} onChange={this.onChangeJan}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Fevereiro</label>  
                    <CurrencyInput placeholder="0,00" id="fev" name="fev" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.fev} onChange={this.onChangeFev}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Março</label>  
                    <CurrencyInput placeholder="0,00" id="mar" name="mar" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.mar} onChange={this.onChangeMar}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Abril</label>  
                    <CurrencyInput placeholder="0,00" id="abr" name="abr" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.abr} onChange={this.onChangeAbr}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Maio</label>  
                    <CurrencyInput placeholder="0,00" id="mai" name="mai" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.mai} onChange={this.onChangeMai}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Junho</label>  
                    <CurrencyInput placeholder="0,00" id="jun" name="jun" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.jun} onChange={this.onChangeJun}/>
                  </div>
                </div>

                <div className="form-row" style={{ textAlign: 'right' }}>
                  <div className="col-sm-2">
                    <label>Julho</label>  
                    <CurrencyInput placeholder="0,00" id="jul" name="jul" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.jul} onChange={this.onChangeJul}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Agosto</label>  
                    <CurrencyInput placeholder="0,00" id="ago" name="ago" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.ago} onChange={this.onChangeAgo}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Setembro</label>  
                    <CurrencyInput placeholder="0,00" id="set" name="set" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.set} onChange={this.onChangeSet}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Outubro</label>  
                    <CurrencyInput placeholder="0,00" id="out" name="out" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.out} onChange={this.onChangeOut}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Novembro</label>  
                    <CurrencyInput placeholder="0,00" id="nov" name="nov" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.nov} onChange={this.onChangeNov}/>
                  </div>
                  <div className="col-sm-2">
                    <label>Dezembro</label>  
                    <CurrencyInput placeholder="0,00" id="dez" name="dez" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.dez} onChange={this.onChangeDez}/>
                  </div>
              </div>

              <div className="form-row">
                <div className="col-sm-4">
                  <label>Tipo de Licitação</label>  
                  <select className="form-control" id="tiplic" value={this.state.tiplic} onChange={this.onChangeTiplic}>
                    {Object.keys(optionstipolicitacoes).map((t,i) => <option key={i} value={optionstipolicitacoes[i].label}>{optionstipolicitacoes[i].label}</option>)}
                  </select>
                </div>
                <div className="col-sm-4">
                  <label>Data de Abertura</label>  
                  <input id="dataabert" name="dataabert" className="form-control input-md" required="" type="text" value={this.state.dataabert} onChange={this.onChangeDataabert}/>
                </div>
                <div className="col-sm-4">
                  <label>Numero</label>  
                  <input id="numerolic" name="numerolic" className="form-control input-md" required="" type="text" value={this.state.numerolic} onChange={this.onChangeNumerolic}/>
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-12">
                  <label>Base Legal</label>  
                  <input id="baselegal" name="baselegal" className="form-control input-md" required="" type="text" value={this.state.baselegal} onChange={this.onChangeBaselegal}/>
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-6">
                  <label>Emissor</label>  
                  <input id="emissor" name="emissor" className="form-control input-md" required="" type="text" value={this.state.emissor} onChange={this.onChangeEmissor}/>
                </div>
                <div className="col-sm-2">
                  <label>Ato de Delegação</label>  
                  <input id="deleemi" name="deleemi" className="form-control input-md" required="" type="text" value={this.state.deleemi} onChange={this.onChangeDeleemi}/>
                </div>
                <div className="col-sm-2">
                  <label>Matricula</label>  
                  <input id="matemi" name="matemi" className="form-control input-md" required="" type="text" value={this.state.matemi} onChange={this.onChangeMatemi}/>
                </div>
                <div className="col-sm-2">
                  <label>Data</label>  
                  <input id="dataemi" name="dataemi" className="form-control input-md" required="" type="text" value={this.state.dataemi} onChange={this.onChangeDataemi}/>
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-6">
                  <label>Ordenador</label>  
                  <input id="ordenador" name="ordenador" className="form-control input-md" required="" type="text" value={this.state.ordenador} onChange={this.onChangeOrdenador}/>
                </div>
                <div className="col-sm-2">
                  <label>Ato de Delegação</label>  
                  <input id="deleord" name="deleord" className="form-control input-md" required="" type="text" value={this.state.deleord} onChange={this.onChangeDeleord}/>
                </div>
                <div className="col-sm-2">
                  <label>Matricula</label>  
                  <input id="matord" name="matord" className="form-control input-md" required="" type="text" value={this.state.matord} onChange={this.onChangeMatord}/>
                </div>
                <div className="col-sm-2">
                  <label>Data</label>  
                  <input id="dataord" name="dataord" className="form-control input-md" required="" type="text" value={this.state.dataord} onChange={this.onChangeDataord}/>
                </div>
              </div>
            
              <div className="form-row">
                <div className="col-sm-6">
                  <label>Ratificador</label>  
                  <input id="ratificador" name="ratificador" className="form-control input-md" required="" type="text" value={this.state.ratificador} onChange={this.onChangeRatificador}/>
                </div>
                <div className="col-sm-2">
                  <label>Ato de Delegação</label>  
                  <input id="delerat" name="delerat" className="form-control input-md" required="" type="text" value={this.state.delerat} onChange={this.onChangeDelerat}/>
                </div>
                <div className="col-sm-2">
                  <label>Matricula</label>  
                  <input id="matrat" name="matrat" className="form-control input-md" required="" type="text" value={this.state.matrat} onChange={this.onChangeMatrat}/>
                </div>
                <div className="col-sm-2">
                  <label>Data</label>  
                  <input id="datarat" name="datarat" className="form-control input-md" required="" type="text" value={this.state.datarat} onChange={this.onChangeDatarat}/>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="form-row">
                <ToastContainer />
                <div className="col-sm-1">
                    <input type="submit" value="Salvar" className="btn btn-sm btn-primary"/>
                </div>
            </div>
        </form>
      </div>
      )
  }
}
