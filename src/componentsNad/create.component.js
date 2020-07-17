import React, { Component } from 'react';
import axios from 'axios';

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

    this.state = {
      numnad : '',
      procnad : '',
      datanad : '',
      evenad  : '',
      catgast  : '',
      adant  : '',
      secret  : '',
      unigest : '',
      uniorc  : '',
      progtrab : '',
      natdesp : '',
      fontrec : '',
      tipcre : '',
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
      valor : '',
      tipemp : '',
      extenso : '',
      descdesp : '',
      jan : '',
      fev : '',
      mar : '',
      abr : '',
      mai : '',
      jun : '',
      jul : '',
      ago : '',
      set : '',
      out : '',
      nov : '',
      dez : '',
      tiplic : '',
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

  onChangeValor(e) {
    this.setState({
      valor: e.target.value
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
    axios.post('http://localhost:4000/nads/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      numnad : '',
      procnad : '',
      datanad : '',
      evenad  : '',
      catgast  : '',
      adant  : '',
      secret  : '',
      unigest : '',
      uniorc  : '',
      progtrab : '',
      natdesp : '',
      fontrec : '',
      tipcre : '',
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
      valor : '',
      tipemp : '',
      extenso : '',
      descdesp : '',
      jan : '',
      fev : '',
      mar : '',
      abr : '',
      mai : '',
      jun : '',
      jul : '',
      ago : '',
      set : '',
      out : '',
      nov : '',
      dez : '',
      tiplic : '',
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
    })

    this.props.history.push('/indexNad');
    
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
                  <div  id="NAD" name="NAD"> 
                    <div class="form-row">
                      <div class="col-sm-6">
                        <h2>Nota de Autorização de Despesa</h2>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Número da NAD</label>  
                        <input type="text" id="numnad" class="form-control input-md" value={this.nunnad} onChange={this.onChangeNumnad}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Processo</label>  
                        <input type="text" id="procnad" class="form-control input-md" value={this.procnad} onChange={this.onChangeProcnad}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Data</label>  
                        <input type="text" id="datanad" class="form-control input-md" value={this.datanad} onChange={this.onChangeDatanad}/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Evento da Nad:</label>  
                        <select class="form-control" id="evenad" value={this.evenad} onChange={this.onChangeEvenad}>
                          <option>1-Empenho de Despesa</option>
                          <option>2-Reforço de Empenho</option>
                          <option>3-Anulação da Nad</option>
                        </select>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Categoria de Gastos:</label>  
                        <select class="form-control" id="catgast" value={this.catgast} onChange={this.onChangeCatgast}>
                          <option>1-Empenho de Despesa</option>
                          <option>2-Reforço de Empenho</option>
                          <option>3-Anulação da Nad</option>
                          <option>4-Cancelamento</option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <label for="Nome">Adiantamento:</label>  
                        <div class="form-check">
                          <label class="form-check-inline form-check-label" for="inlineRadio1">Sim </label>
                          <input class="form-check-inline form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="opcao1"/>
                          <label class="form-check-inline form-check-label" for="inlineRadio2">Não </label>
                          <input class="form-check-inline form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="opcao2"/>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-sm-12">
                        <label for="Nome">Secretaria:</label>  
                        <input id="secret" name="secret" class="form-control input-md" type="text" value={this.secret} onChange={this.onChangeSecret} />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-sm-6">
                        <label for="Nome">Unidade Gestora:</label>  
                        <input id="unigest" name="unigest" class="form-control input-md" required="" type="text" value={this.unigest} onChange={this.onChangeUnigest}/>
                      </div>
                      <div class="col-sm-6">
                        <label for="Nome">Unidade Orçamentaria:</label>  
                        <input id="uniorc" name="uniorc" class="form-control input-md" required="" type="text" value={this.uniorc} onChange={this.onChangeUniorc}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Programa de Trabalho</label>  
                        <input id="progtrab" name="progtrab" class="form-control input-md" required="" type="text" value={this.progtrab} onChange={this.onChangeProgtrab}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Natureza de Despesa</label>  
                        <input id="natdesp" name="natdesp" class="form-control input-md" required="" type="text" value={this.natdesp} onChange={this.onChangeNatdesp}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Fonte de Recurso</label>  
                        <input id="fontrec" name="fontrec" class="form-control input-md" required="" type="text" value={this.fontrec} onChange={this.onChangeFontrec}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-3">
                        <label for="Nome">Tipo de Credito</label>  
                        <select class="form-control" id="tipcre" value={this.tipcre} onChange={this.onChangeTipcre}>
                          <option>1-Orçamento Geral Suplementar</option>
                          <option>2-Especial</option>
                          <option>3-Extraordinario</option>
                        </select>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Banco</label>  
                        <input id="banpag" name="banpag" class="form-control input-md" required="" type="text" value={this.banpag} onChange={this.onChangeBanpag}/>
                      </div>
                      <div class="col-sm-3">
                        <label for="Nome">Agencia</label>  
                        <input id="agepag" name="agepag" class="form-control input-md" required="" type="text" value={this.agepag} onChange={this.onChangeAgepag}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Conta Corrente</label>  
                        <input id="ccpag" name="ccpag" class="form-control input-md" required="" type="text" value={this.ccpag} onChange={this.onChangeCcpag}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-12">
                        <label for="Nome">Nome do Favorecido:</label>  
                      </div>
                        <input id="nomefav" name="nomefav" class="form-control input-md" required="" type="text" value={this.nomefav} onChange={this.onChangeNomefav} />
                    </div>

                    <div class="form-row">
                      <div class="col-sm-12">
                        <label for="Nome">Endereço</label>  
                        <input id="ender" name="ender" class="form-control input-md" required="" type="text" value={this.ender} onChange={this.onChangeEnder} />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Bairro</label>  
                        <input id="bai" name="bai" class="form-control input-md" required="" type="text" value={this.bai} onChange={this.onChangeBai}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Cidade</label>  
                        <input id="cid" name="cid" class="form-control input-md" required="" type="text" value={this.cid} onChange={this.onChangeCid}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Cep</label>  
                        <input id="cep" name="cep" class="form-control input-md" required="" type="text" value={this.cep} onChange={this.onChangeCep}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Estado</label>  
                        <input id="uf" name="uf" class="form-control input-md" required="" type="text" value={this.uf} onChange={this.onChangeUf}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-3">
                        <label for="Nome">Cnpj/Cpf:</label>  
                        <input id="cnpj" name="cnpj" class="form-control input-md" required="" type="text" value={this.cnpj} onChange={this.onChangeCnpj}/>
                      </div>
                      <div class="col-sm-3">
                        <label for="Nome">Banco</label>  
                        <input id="banrec" name="banrec" class="form-control input-md" required="" type="text" value={this.banrec} onChange={this.onChangeBanrec}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Agencia</label>  
                        <input id="agerec" name="agerec" class="form-control input-md" required="" type="text" value={this.agerec} onChange={this.onChangeAgerec}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Conta Corrente</label>  
                        <input id="ccrec" name="ccrec" class="form-control input-md" required="" type="text" value={this.ccrec} onChange={this.onChangeCcrec}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-2">
                        <label for="Nome">Tipo de Empenho</label>  
                        <select class="form-control" id="tipemp" value={this.tipemp} onChange={this.onChangeTipemp}>
                          <option>1-Ordinario</option>
                          <option>2-Estimativo</option>
                          <option>3-Global</option>
                        </select>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Valor</label>  
                        <input id="valor" name="valor" class="form-control input-md" required="" type="text" value={this.valor} onChange={this.onChangeValor}/>
                      </div>
                      <div class="col-sm-8">
                        <label for="Nome">Extenso</label>  
                        <input id="extenso" name="estenso" class="form-control input-md" required="" type="text" value={this.extenso} onChange={this.onChangeExtenso}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-12">
                        <label for="Nome">Descrição da Despesa</label>  
                        <input id="descdesp" name="descdesp" class="form-control input-md" required="" type="text" value={this.descdesp} onChange={this.onChangeDescdesp}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Janeiro</label>  
                        <input id="jan" name="jan" class="form-control input-md" required="" type="text" value={this.jan} onChange={this.onChangeJan}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Maio</label>  
                        <input id="mai" name="mai" class="form-control input-md" required="" type="text" value={this.mai} onChange={this.onChangeMai}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Setembro</label>  
                        <input id="set" name="set" class="form-control input-md" required="" type="text" value={this.set} onChange={this.onChangeSet}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Fevereiro</label>  
                        <input id="fev" name="fev" class="form-control input-md" required="" type="text" value={this.fev} onChange={this.onChangeFev}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Junho</label>  
                        <input id="jun" name="jun" class="form-control input-md" required="" type="text" value={this.jun} onChange={this.onChangeJun}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Outubro</label>  
                        <input id="out" name="out" class="form-control input-md" required="" type="text" value={this.out} onChange={this.onChangeOut}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Março</label>  
                        <input id="mar" name="mar" class="form-control input-md" required="" type="text" value={this.mar} onChange={this.onChangeMar}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Julho</label>  
                        <input id="jul" name="jul" class="form-control input-md" required="" type="text" value={this.jul} onChange={this.onChangeJul}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Novembro</label>  
                        <input id="nov" name="nov" class="form-control input-md" required="" type="text" value={this.nov} onChange={this.onChangeNov}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Abril</label>  
                        <input id="abr" name="abr" class="form-control input-md" required="" type="text" value={this.abr} onChange={this.onChangeAbr}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Agosto</label>  
                        <input id="ago" name="ago" class="form-control input-md" required="" type="text" value={this.ago} onChange={this.onChangeAgo}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Dezembro</label>  
                        <input id="dez" name="dez" class="form-control input-md" required="" type="text" value={this.dez} onChange={this.onChangeDez}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Tipo de Licitação</label>  
                        <input id="tiplic" name="tiplic" class="form-control input-md" required="" type="text" value={this.tiplic} onChange={this.onChangeTiplic}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Data de Abertura</label>  
                        <input id="dataabert" name="dataabert" class="form-control input-md" required="" type="text" value={this.dataabert} onChange={this.onChangeDataabert}/>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Numero</label>  
                        <input id="numerolic" name="numerolic" class="form-control input-md" required="" type="text" value={this.numerolic} onChange={this.onChangeNumerolic}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-9">
                        <label for="Nome">Base Legal</label>  
                        <input id="baselegal" name="baselegal" class="form-control input-md" required="" type="text" value={this.baselegal} onChange={this.onChangeBaselegal}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-6">
                        <label for="Nome">Emissor</label>  
                        <input id="emissor" name="emissor" class="form-control input-md" required="" type="text" value={this.emissor} onChange={this.onChangeEmissor}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Ato de Delegação</label>  
                        <input id="deleemi" name="deleemi" class="form-control input-md" required="" type="text" value={this.deleemi} onChange={this.onChangeDeleemi}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Matricula</label>  
                        <input id="matemi" name="matemi" class="form-control input-md" required="" type="text" value={this.matemi} onChange={this.onChangeMatemi}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Data</label>  
                        <input id="dataemi" name="dataemi" class="form-control input-md" required="" type="text" value={this.dataemi} onChange={this.onChangeDataemi}/>
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-6">
                        <label for="Nome">Ordenador</label>  
                        <input id="ordenador" name="ordenador" class="form-control input-md" required="" type="text" value={this.ordenador} onChange={this.onChangeOrdenador}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Ato de Delegação</label>  
                        <input id="deleord" name="deleord" class="form-control input-md" required="" type="text" value={this.deleord} onChange={this.onChangeDeleord}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Matricula</label>  
                        <input id="matord" name="matord" class="form-control input-md" required="" type="text" value={this.matord} onChange={this.onChangeMatord}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Data</label>  
                        <input id="dataord" name="dataord" class="form-control input-md" required="" type="text" value={this.dataord} onChange={this.onChangeDataord}/>
                      </div>
                    </div>
                  
                    <div class="form-row">
                      <div class="col-sm-6">
                        <label for="Nome">Ratificador</label>  
                        <input id="ratificador" name="ratificador" class="form-control input-md" required="" type="text" value={this.ratificador} onChange={this.onChangeRatificador}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Ato de Delegação</label>  
                        <input id="delerat" name="delerat" class="form-control input-md" required="" type="text" value={this.delerat} onChange={this.onChangeDelerat}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Matricula</label>  
                        <input id="matrat" name="matrat" class="form-control input-md" required="" type="text" value={this.matrat} onChange={this.onChangeMatrat}/>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Data</label>  
                        <input id="datarat" name="datarat" class="form-control input-md" required="" type="text" value={this.datarat} onChange={this.onChangeDatarat}/>
                      </div>
                    </div>
                    <div>

                    </div>
                    <div class="form-row">
                        <div class="col-sm-2">
                            <input type="submit" value="Salvar" className="btn btn-primary"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
  }
}
