import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onChangeOperadoraName = this.onChangeOperadoraName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:'',
      operadora_name:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }
  onChangeOperadoraName(e) {
    this.setState({
      operadora_name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number,
      operadora_name: this.state.operadora_name
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: '',
      operadora_name: ''
    })

    this.props.history.push('/indexPerson');
    
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
                        <input id="numnad" name="nunnad" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Processo</label>  
                        <input id="procnad" name="procnad" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Data</label>  
                        <input id="datanad" name="datanad" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Evento da Nad:</label>  
                        <select class="form-control" id="evenad">
                          <option>1-Empenho de Despesa</option>
                          <option>2-Reforço de Empenho</option>
                          <option>3-Anulação da Nad</option>
                        </select>
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Categoria de Gastos:</label>  
                        <select class="form-control" id="catgast">
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
                        <input id="secret" name="secret" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-sm-6">
                        <label for="Nome">Unidade Gestora:</label>  
                        <input id="unigest" name="unigest" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-6">
                        <label for="Nome">Unidade Orçamentaria:</label>  
                        <input id="uniorc" name="uniorc" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Programa de Trabalho</label>  
                        <input id="progtrab" name="progtrab" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Natureza de Despesa</label>  
                        <input id="natdesp" name="natdesp" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Fonte de Recurso</label>  
                        <input id="fontrec" name="fontrec" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-3">
                        <label for="Nome">Tipo de Credito</label>  
                        <select class="form-control" id="tipcre">
                          <option>1-Orçamento Geral Suplementar</option>
                          <option>2-Especial</option>
                          <option>3-Extraordinario</option>
                        </select>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Banco</label>  
                        <input id="banpag" name="banpag" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-3">
                        <label for="Nome">Agencia</label>  
                        <input id="agepag" name="agepag" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Conta Corrente</label>  
                        <input id="ccpag" name="ccpag" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-12">
                        <label for="Nome">Nome do Favorecido:</label>  
                        <input id="nomefav" name="nomefav" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-12">
                        <label for="Nome">Endereço</label>  
                        <input id="ender" name="ender" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Bairro</label>  
                        <input id="bai" name="bai" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Cidade</label>  
                        <input id="cid" name="cid" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Cep</label>  
                        <input id="cep" name="cep" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Estado</label>  
                        <input id="uf" name="uf" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-3">
                        <label for="Nome">Cnpj/Cpf:</label>  
                        <input id="cnpj" name="cnpj" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-3">
                        <label for="Nome">Banco</label>  
                        <input id="banrec" name="banrec" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Agencia</label>  
                        <input id="agerec" name="agerec" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Conta Corrente</label>  
                        <input id="ccrec" name="ccrec" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-2">
                        <label for="Nome">Tipo de Empenho</label>  
                        <select class="form-control" id="tipemp">
                          <option>1-Ordinario</option>
                          <option>2-Estimativo</option>
                          <option>3-Global</option>
                        </select>
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Valor</label>  
                        <input id="valor" name="valor" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-8">
                        <label for="Nome">Extenso</label>  
                        <input id="extenso" name="estenso" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-12">
                        <label for="Nome">Descrição da Despesa</label>  
                        <input id="descdesp" name="descdesp" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Janeiro</label>  
                        <input id="jan" name="jan" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Maio</label>  
                        <input id="mai" name="mai" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Setembro</label>  
                        <input id="set" name="set" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Fevereiro</label>  
                        <input id="fev" name="fev" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Junho</label>  
                        <input id="jun" name="jun" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Outubro</label>  
                        <input id="out" name="out" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Março</label>  
                        <input id="mar" name="mar" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Julho</label>  
                        <input id="jul" name="jul" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Novembro</label>  
                        <input id="nov" name="nov" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Abril</label>  
                        <input id="abr" name="abr" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Agosto</label>  
                        <input id="ago" name="ago" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Dezembro</label>  
                        <input id="dez" name="dez" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-4">
                        <label for="Nome">Tipo de Licitação</label>  
                        <input id="tiplic" name="tiplic" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Data de Abertura</label>  
                        <input id="dataabert" name="dataabert" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-4">
                        <label for="Nome">Numero</label>  
                        <input id="numerolic" name="numerolic" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-9">
                        <label for="Nome">Base Legal</label>  
                        <input id="baselegal" name="baselegal" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-6">
                        <label for="Nome">Emissor</label>  
                        <input id="emissor" name="emissor" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Ato de Delegação</label>  
                        <input id="deleemi" name="deleemi" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Matricula</label>  
                        <input id="matemi" name="matemi" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Data</label>  
                        <input id="dataemi" name="dataemi" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="col-sm-6">
                        <label for="Nome">Ordenador</label>  
                        <input id="ordenador" name="ordenador" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Ato de Delegação</label>  
                        <input id="deleord" name="deleord" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Matricula</label>  
                        <input id="matord" name="matord" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Data</label>  
                        <input id="dataord" name="dataord" class="form-control input-md" required="" type="text" />
                      </div>
                    </div>
                  
                    <div class="form-row">
                      <div class="col-sm-6">
                        <label for="Nome">Ratificador</label>  
                        <input id="ratificador" name="ratificador" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Ato de Delegação</label>  
                        <input id="delerat" name="delerat" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Matricula</label>  
                        <input id="matret" name="matret" class="form-control input-md" required="" type="text" />
                      </div>
                      <div class="col-sm-2">
                        <label for="Nome">Data</label>  
                        <input id="datarat" name="datarat" class="form-control input-md" required="" type="text" />
                      </div>
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
