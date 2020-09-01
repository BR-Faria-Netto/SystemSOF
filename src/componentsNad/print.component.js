import React, { Component } from 'react';
import axios from 'axios';
import serverapi from '../serverapi';

import CurrencyInput from '../componentsCurrency/CurrencyInput'
import InputMask from 'react-input-mask';

const logo = require('../images/logoRJ.png'); 


export default class PrintNad extends Component {

  constructor(props) {
    super(props);

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
  
  componentDidMount() {
      axios.get(serverapi.name + 'nads/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                numnad : response.data.numnad,
                procnad : response.data.procnad,
                datanad : response.data.datanad,
                evenad  :  response.data.evenad,
                catgast : response.data.catgast ,
                adant  : response.data.adant ,
                secret  : response.data.secret,
                unigest : response.data.unigest,
                uniorc  : response.data.uniorc,
                progtrab : response.data.progtrab,
                natdesp : response.data.natdesp,
                fontrec : response.data.fontrec,
                tipcre : response.data.tipcre,
                banpag : response.data.banpag,
                agepag : response.data.agepag,
                ccpag : response.data.ccpag,
                nomefav : response.data.nomefav,
                bai : response.data.bai,
                ender : response.data.ender,
                cid : response.data.cid,
                cep : response.data.cep,
                uf : response.data.uf,
                cnpj : response.data.cnpj,
                banrec : response.data.banrec,
                agerec : response.data.agerec,
                ccrec : response.data.ccrec,
                valor : response.data.valor,
                tipemp : response.data.tipemp,
                extenso : response.data.extenso,
                descdesp : response.data.descdesp,
                jan : response.data.jan,
                fev : response.data.fev,
                mar : response.data.mar,
                abr : response.data.abr,
                mai : response.data.mai,
                jun : response.data.jun,
                jul : response.data.jul,
                ago : response.data.ago,
                set : response.data.set,
                out : response.data.out,
                nov : response.data.nov,
                dez : response.data.dez,
                tiplic : response.data.tiplic,
                dataabert : response.data.dataabert,
                numerolic : response.data.numerolic,
                baselegal : response.data.baselegal,
                emissor : response.data.emissor,
                deleemi : response.data.deleemi,
                matemi : response.data.matemi,
                dataemi : response.data.dataemi,
                ordenador : response.data.ordenador,
                deleord : response.data.deleord,
                matord : response.data.matord,
                dataord : response.data.dataord,
                ratificador : response.data.ratificador,
                delerat : response.data.delerat,
                matrat : response.data.matrat,
                datarat : response.data.datarat
              });
          })
          .catch(function (error) {
              console.log(error);
          })

    }

    componentDidUpdate(prevProps, prevState) {
      window.print();
      this.props.history.push('/indexNad');
    }

  render() {

    
    
    return (
  
        <div className="container" style={{ marginTop: 20, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>

            <form onSubmit={this.onSubmit}>
              <div id='nad'>

                <div className="form-row">
                    <div className="col-sm-2">
                        <img src={logo} style={{width: '100px', height: '100px'}} alt=""/>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-row">
                          <label>Governo do Estado do Rio de Janeiro</label>  
                      </div>
                      <div className="form-row">
                          <label>Secretaria de Estado de Saúde</label>  
                      </div>
                      <div className="form-row">
                          <label>Fundo Estadual de Saúde</label>  
                      </div>
                    </div>
                </div>

                <hr></hr>
                
                <div className="form-row">
                  <div className="col-sm-6">
                    <h3>Nota de Autorização de Despesa</h3>
                  </div>
                  <div className="col-sm-1">
                    <label>NAD</label>  
                    <input type="text" id="numnad" className="form-control input-md" value={this.state.numnad} />
                  </div>
                  <div className="col-sm-3">
                    <label>Processo</label>  
                    <input type="text" id="procnad" className="form-control input-md" value={this.state.procnad} />
                  </div>
                  <div className="col-sm-2">
                    <label>Data</label>  
                    <InputMask mask='99/99/9999' slotChar='mm/dd/yyyy' type="text" id="datanad" className="form-control input-md" value={this.state.datanad} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-sm-4">
                    <label>Evento da Nad:</label>  
                    <input type="text" className="form-control" id="evenad" value={this.state.evenad} />
                  </div>
                  <div className="col-sm-4">
                    <label>Grudo de Despesas:</label>  
                    <input type="text" className="form-control" id="catgast" value={this.state.catgast} />
                  </div>
                  <div className="col-sm-1">
                      <label>Adiantamento</label>  
                      <input type="text" className="form-control" id="adant" value={this.state.adant} />
                  </div>    
                </div>
                <div className="form-row">
                  <div className="col-sm-4">
                    <label>Secretaria</label>  
                    <input id="secret" name="secret" className="form-control input-md" type="text" value={this.state.secret} />
                  </div>
                  <div className="col-sm-4">
                    <label>Unidade Gestora</label>  
                    <input type="text" className="form-control" id="unigest" value={this.state.unigest} />
                  </div>
                  <div className="col-sm-4">
                    <label>Unidade Orçamentaria</label>  
                    <input type="text" className="form-control" id="uniorc" value={this.state.uniorc} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-sm-4">
                    <label>Programa de Trabalho</label>  
                    <input type="text" className="form-control" id="progtrab" value={this.state.progtrab} />
                  </div>
                  <div className="col-sm-4">
                    <label>Natureza de Despesa</label>  
                    <input type="text" className="form-control" id="natdesp" value={this.state.natdesp} />
                  </div>
                  <div className="col-sm-4">
                    <label>Fonte de Recurso</label>  
                    <input type="text" className="form-control" id="fontrec" value={this.state.fontrec} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-sm-3">
                    <label>Tipo de Credito</label>  
                    <input type="text" className="form-control" id="tipcre" value={this.state.tipcre} />
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
                    <input type="text" className="form-control" id="nomefav" value={this.state.nomefav} />
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
                    <input type="text" className="form-control" id="tipemp" value={this.state.tipemp} />
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
                    <input id="tiplic" name="tiplic" className="form-control input-md" required="" type="text" value={this.state.tiplic} />
                  </div>
                  <div className="col-sm-4">
                    <label>Data de Abertura</label>  
                    <input id="dataabert" name="dataabert" className="form-control input-md" required="" type="text" value={this.state.dataabert} />
                  </div>
                  <div className="col-sm-4">
                    <label>Numero</label>  
                    <input id="numerolic" name="numerolic" className="form-control input-md" required="" type="text" value={this.state.numerolic} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-sm-12">
                    <label>Base Legal</label>  
                    <input id="baselegal" name="baselegal" className="form-control input-md" required="" type="text" value={this.state.baselegal} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-sm-6">
                    <label>Emissor</label>  
                    <input id="emissor" name="emissor" className="form-control input-md" required="" type="text" value={this.state.emissor} />
                  </div>
                  <div className="col-sm-2">
                    <label>Ato de Delegação</label>  
                    <input id="deleemi" name="deleemi" className="form-control input-md" required="" type="text" value={this.state.deleemi} />
                  </div>
                  <div className="col-sm-2">
                    <label>Matricula</label>  
                    <input id="matemi" name="matemi" className="form-control input-md" required="" type="text" value={this.state.matemi} />
                  </div>
                  <div className="col-sm-2">
                    <label>Data</label>  
                    <input id="dataemi" name="dataemi" className="form-control input-md" required="" type="text" value={this.state.dataemi} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-sm-6">
                    <label>Ordenador</label>  
                    <input id="ordenador" name="ordenador" className="form-control input-md" required="" type="text" value={this.state.ordenador} />
                  </div>
                  <div className="col-sm-2">
                    <label>Ato de Delegação</label>  
                    <input id="deleord" name="deleord" className="form-control input-md" required="" type="text" value={this.state.deleord} />
                  </div>
                  <div className="col-sm-2">
                    <label>Matricula</label>  
                    <input id="matord" name="matord" className="form-control input-md" required="" type="text" value={this.state.matord} />
                  </div>
                  <div className="col-sm-2">
                    <label>Data</label>  
                    <input id="dataord" name="dataord" className="form-control input-md" required="" type="text" value={this.state.dataord} />
                  </div>
                </div>
              
                <div className="form-row">
                  <div className="col-sm-6">
                    <label>Ratificador</label>  
                    <input id="ratificador" name="ratificador" className="form-control input-md" required="" type="text" value={this.state.ratificador} />
                  </div>
                  <div className="col-sm-2">
                    <label>Ato de Delegação</label>  
                    <input id="delerat" name="delerat" className="form-control input-md" required="" type="text" value={this.state.delerat} />
                  </div>
                  <div className="col-sm-2">
                    <label>Matricula</label>  
                    <input id="matrat" name="matrat" className="form-control input-md" required="" type="text" value={this.state.matrat} />
                  </div>
                  <div className="col-sm-2">
                    <label>Data</label>  
                    <input id="datarat" name="datarat" className="form-control input-md" required="" type="text" value={this.state.datarat} />
                  </div>
                </div>
              </div>
              <hr></hr>
          </form>
      </div>
    )
  }
}