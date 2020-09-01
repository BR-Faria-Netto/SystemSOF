import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import CreateFavorecido from './componentsFavorecido/create.component';
import EditFavorecido from   './componentsFavorecido/edit.component';
import IndexFavorecido from  './componentsFavorecido/index.component';

import CreateTableCode from './componentsTableCode/create.component';
import EditTableCode from   './componentsTableCode/edit.component';
import IndexTableCode from  './componentsTableCode/index.component';

import CreateNad from './componentsNad/create.component';
import EditNad from   './componentsNad/edit.component';
import CloneNad from  './componentsNad/clone.component';
import IndexNad from  './componentsNad/index.component';
import PrintNad from  './componentsNad/print.component';

import CreateNdc from './componentsNdc/create.component';
import EditNdc from   './componentsNdc/edit.component';
import CloneNdc from  './componentsNdc/clone.component';
import IndexNdc from  './componentsNdc/index.component';
import PrintNdc from  './componentsNdc/print.component';

import "./style.css";

import Background from './images/Safira.png'

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={ show:true} 
  }

  handleClick = value => () => {
    this.setState( {show : false})
  };

  homeClick = value => () => {
    this.setState( {show : true})
  };

  render() {

    return (
      
      <Router>
        <div className="responsive bg-dim full-bg-size" style={{ marginTop: 10, border: '2px solid #D3D3D3', width:'100%', height: '100%', maxWidth: '100%', minheight: '100%'}}>                  
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/" onClick={this.homeClick()}>Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/indexFavorecido">Favorecido</Nav.Link>
                  <NavDropdown title="Despesas" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/indexNad" onClick={this.handleClick()}>Autorização</NavDropdown.Item>
                        <NavDropdown.Item href="/indexNdc">Descentralização</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown className="text-white" title="Cadastro" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/indexTableCode/tipoeventos/Evento da Nad">Evento Nad</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTableCode/eventondcs/Evento da Ndc">Evento Ndc</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTableCode/fonterecursos/Fonte de Recurso">Fonte Recurso</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTableCode/naturezadespesas/Natureza de Despesa">Natureza de Despesa</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTableCode/progtrabalhos/Programa de Trabalho">Programa de Trabalho</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTableCode/tipolicitacoes/Tipo de Licitação">Tipo de Licitação</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTableCode/tipocreditos/Tipo de Crédito">Tipo de Credito</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTableCode/tipoempenhos/Tipo de Empenho">Tipo de Evento</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTableCode/unidgestoras/Unidade Gestora">Unidade Gestora</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTableCode/unidorcamentarias/Unidade Orçamentária">Unidade Orçamentaria</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link eventKey={2} href="#memes">
                      Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {this.state.show? 
              <div className="foo" >
                  <img src={Background} style={{width: '100%', height: '100%'}} resizeMode="contain" alt=""/> 
              </div>
            : 
              <div></div>
            }
        
            <Switch>

                <Route exact path='/createTableCode/:dbTable/:pgTitle' component={ CreateTableCode } />
                <Route path='/editTableCode/:dbTable/:id/:pgTitle' component={ EditTableCode } /> 
                <Route path='/indexTableCode/:dbTable/:pgTitle' component={ IndexTableCode } />

                <Route exact path='/createFavorecido' component={ CreateFavorecido } />
                <Route path='/editFavorecido/:id' component={ EditFavorecido } /> 
                <Route path='/indexFavorecido' component={ IndexFavorecido } />

                <Route exact path='/createNad' component={ CreateNad } />
                <Route path='/editNad/:id' component={ EditNad } /> 
                <Route path='/cloneNad/:id' component={ CloneNad } /> 
                <Route path='/indexNad' component={ IndexNad } />
                <Route path='/printNad/:id' component={ PrintNad } /> 

                <Route exact path='/createNdc' component={ CreateNdc } />
                <Route path='/editNdc/:id' component={ EditNdc } /> 
                <Route path='/cloneNdc/:id' component={ CloneNdc } /> 
                <Route path='/indexNdc' component={ IndexNdc } />
                <Route path='/printNdc/:id' component={ PrintNdc } /> 

            </Switch>

        </div>
     
      </Router>

    );
  }
}

export default App;