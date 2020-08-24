import React, { Component } from 'react';
import axios from 'axios';
import serverapi from '../serverapi';

import CurrencyInput from '../componentsCurrency/CurrencyInput'
import InputMask from 'react-input-mask';

export default class PrintNdc extends Component {

  constructor(props) {
    super(props);
    this.state = {
       numndc : '',
       procndc : '',
       datandc : '',
       evendc  : '',
       secret  : '',
       unigest : '',
       progtrab : '',
       natdesp : '',
       fontrec : '',
       nomefav : '',
       bai : '',
       ender : '',
       cid : '',
       cep : '',
       uf : '',
       cnpj : '',
       valor : '',
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

      axios.get(serverapi.name + 'ndcs/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                numndc : response.data.numndc,
                procndc : response.data.procndc,
                datandc : response.data.datandc,
                evendc  :  response.data.evendc,
                secret  : response.data.secret,
                unigest : response.data.unigest,
                progtrab : response.data.progtrab,
                natdesp : response.data.natdesp,
                fontrec : response.data.fontrec,
                nomefav : response.data.nomefav,
                bai : response.data.bai,
                ender : response.data.ender,
                cid : response.data.cid,
                cep : response.data.cep,
                uf : response.data.uf,
                cnpj : response.data.cnpj,
                valor : response.data.valor,
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
      this.props.history.push('/indexNdc');
    }
    
  render() {
    return (
      <div className="container" style={{ marginTop: 50, width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>
         <form onSubmit={this.onSubmit}>
            <div id='ndc'>
              <div className="form-row">
                <div className="col-sm-6">
                  <h3>Nota de Descentralização de Crédito</h3>
                </div>
                <div className="col-sm-1">
                  <label>ndc</label>  
                  <input type="text" id="numndc" className="form-control input-md" value={this.state.numndc} />
                </div>
                <div className="col-sm-3">
                  <label>Processo</label>  
                  <input type="text" id="procndc" className="form-control input-md" value={this.state.procndc}/>
                </div>
                <div className="col-sm-2">
                  <label>Data</label>  
                  <InputMask mask='99/99/9999' slotChar='mm/dd/yyyy' type="text" id="datandc" className="form-control input-md" value={this.state.datandc} />
                </div>
              </div>
   
              <div className="form-row">
                <div className="col-sm-4">
                  <label>Secretaria</label>  
                  <input id="secret" name="secret" className="form-control input-md" type="text" value={this.state.secret} />
                </div>
                <div className="col-sm-4">
                  <label>Unidade Gestora</label>  
                  <input className="form-control input-md" type="text" id="unigest" value={this.state.unigest} />
                </div>
                <div className="col-sm-4">
                  <label>Evento da ndc</label>  
                  <input className="form-control input-md" type="text" id="evendc" value={this.state.evendc}  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-4">
                  <label>Programa de Trabalho</label>  
                  <input className="form-control input-md" type="text" id="progtrab" value={this.state.progtrab} />
                </div>
                <div className="col-sm-4">
                  <label>Natureza de Despesa</label>  
                  <input className="form-control input-md" type="text" id="natdesp" value={this.state.natdesp} />
                </div>
                <div className="col-sm-4">
                  <label>Fonte de Recurso</label>  
                  <input className="form-control input-md" type="text" id="fontrec" value={this.state.fontrec} />
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-12">
                  <label>Nome do Favorecido:</label>  
                  <input className="form-control input-md" type="text" id="nomefav" value={this.state.nomefav} />
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-12">
                  <label>Endereço</label>  
                  <input id="ender" name="ender" className="form-control input-md" required="" type="text" value={this.state.ender}/>
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-4">
                  <label>Bairro</label>  
                  <input id="bai" name="bai" className="form-control input-md" required="" type="text" value={this.state.bai} />
                </div>
                <div className="col-sm-4">
                  <label>Cidade</label>  
                  <input id="cid" name="cid" className="form-control input-md" required="" type="text" value={this.state.cid} />
                </div>
                <div className="col-sm-2">
                  <label>Cep</label>  
                  <input id="cep" name="cep" className="form-control input-md" required="" type="text" value={this.state.cep} />
                </div>
                <div className="col-sm-2">
                  <label>Estado</label>  
                  <input id="uf" name="uf" className="form-control input-md" required="" type="text" value={this.state.uf} />
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-2">
                  <label>Cnpj/Cpf:</label>  
                  <input id="cnpj" name="cnpj" className="form-control input-md" required="" type="text" value={this.state.cnpj} />
                </div>
                <div className="col-sm-2" style={{ textAlign: 'right' }}>
                  <label>Valor</label>  
                  <CurrencyInput placeholder="0,00" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.valor} />
                </div>
                <div className="col-sm-8">
                  <label>Extenso</label>  
                  <input id="extenso" name="estenso" className="form-control input-md"  required="" type="text" value={this.state.extenso} />
                </div>
              </div>

              <div className="form-row">
                <div className="col-sm-12">
                  <label>Descrição da Despesa</label>  
                  <input id="descdesp" name="descdesp" className="form-control input-md" required="" type="text" value={this.state.descdesp} />
                </div>
              </div>

              <div className="form-row" style={{ textAlign: 'right' }}>
                <div className="col-sm-2">
                  <label>Janeiro</label>  
                  <CurrencyInput placeholder="0,00" id="jan" name="jan" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.jan} />
                </div>
                <div className="col-sm-2">
                  <label>Fevereiro</label>  
                  <CurrencyInput placeholder="0,00" id="fev" name="fev" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.fev} />
                </div>
                <div className="col-sm-2">
                  <label>Março</label>  
                  <CurrencyInput placeholder="0,00" id="mar" name="mar" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.mar} />
                </div>
                <div className="col-sm-2">
                  <label>Abril</label>  
                  <CurrencyInput placeholder="0,00" id="abr" name="abr" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.abr} />
                </div>
                <div className="col-sm-2">
                  <label>Maio</label>  
                  <CurrencyInput placeholder="0,00" id="mai" name="mai" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.mai} />
                </div>
                <div className="col-sm-2">
                  <label>Junho</label>  
                  <CurrencyInput placeholder="0,00" id="jun" name="jun" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.jun} />
                </div>
              </div>

              <div className="form-row" style={{ textAlign: 'right' }}>
                <div className="col-sm-2">
                  <label>Julho</label>  
                  <CurrencyInput placeholder="0,00" id="jul" name="jul" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.jul} />
                </div>
                <div className="col-sm-2">
                  <label>Agosto</label>  
                  <CurrencyInput placeholder="0,00" id="ago" name="ago" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.ago} />
                </div>
                <div className="col-sm-2">
                  <label>Setembro</label>  
                  <CurrencyInput placeholder="0,00" id="set" name="set" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.set} />
                </div>
                <div className="col-sm-2">
                  <label>Outubro</label>  
                  <CurrencyInput placeholder="0,00" id="out" name="out" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.out} />
                </div>
                <div className="col-sm-2">
                  <label>Novembro</label>  
                  <CurrencyInput placeholder="0,00" id="nov" name="nov" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.nov} />
                </div>
                <div className="col-sm-2">
                  <label>Dezembro</label>  
                  <CurrencyInput placeholder="0,00" id="dez" name="dez" className="form-control input-md" style={{ textAlign: 'right' }} required="" type="text" value={this.state.dez} />
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
              <hr></hr>

            </div>

        </form>
      </div>

   )
  }
  
}
