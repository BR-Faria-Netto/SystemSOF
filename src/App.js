import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import CreateFavorecido from './componentsFavorecido/create.component';
import EditFavorecido from  './componentsFavorecido/edit.component';
import IndexFavorecido from './componentsFavorecido/index.component';

import CreateTipoCredito from './componentsTipoCredito/create.component';
import EditTipoCredito from './componentsTipoCredito/edit.component';
import IndexTipoCredito from './componentsTipoCredito/index.component';

import CreateTipoEvento from './componentsTipoEvento/create.component';
import EditTipoEvento from './componentsTipoEvento/edit.component';
import IndexTipoEvento from './componentsTipoEvento/index.component';

import CreateFonteRecurso from './componentsFonteRecurso/create.component';
import EditFonteRecurso from './componentsFonteRecurso/edit.component';
import IndexFonteRecurso from './componentsFonteRecurso/index.component';

import CreateNaturezaDespesa from './componentsNaturezaDespesa/create.component';
import EditNaturezaDespesa   from './componentsNaturezaDespesa/edit.component';
import IndexNaturezaDespesa from './componentsNaturezaDespesa/index.component';

import CreateProgTrabalho from './componentsProgTrabalho/create.component';
import EditProgTrabalho   from './componentsProgTrabalho/edit.component';
import IndexProgTrabalho from './componentsProgTrabalho/index.component';

import CreateTipoEmpenho from './componentsTipoEmpenho/create.component';
import EditTipoEmpenho from './componentsTipoEmpenho/edit.component';
import IndexTipoEmpenho from './componentsTipoEmpenho/index.component';

import CreateTipoLicitacao from './componentsTipoLicitacao/create.component';
import EditTipoLicitacao from './componentsTipoLicitacao/edit.component';
import IndexTipoLicitacao from './componentsTipoLicitacao/index.component';

import CreateGrupoDespesa from './componentsGrupoDespesa/create.component';
import EditGrupoDespesa from './componentsGrupoDespesa/edit.component';
import IndexGrupoDespesa from './componentsGrupoDespesa/index.component';

import CreateUnidGestora from './componentsUnidGestora/create.component';
import EditUnidGestora from './componentsUnidGestora/edit.component';
import IndexUnidGestora from './componentsUnidGestora/index.component';

import CreateUnidOrcamentaria from './componentsUnidOrcamentaria/create.component';
import EditUnidOrcamentaria from './componentsUnidOrcamentaria/edit.component';
import IndexUnidOrcamentaria from './componentsUnidOrcamentaria/index.component';

import CreateNad from './componentsNad/create.component';
import EditNad from './componentsNad/edit.component';
import IndexNad from './componentsNad/index.component';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link href="/indexNad">Nad</Nav.Link>
                <Nav.Link href="/indexFavorecido">Favorecido</Nav.Link>
                <Nav className="mr-auto">
                  <NavDropdown title="Cadastro" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/indexTipoCredito">Tipo de Credito</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTipoEvento">Tipo de Evento</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTipoEmpenho">Tipo de Empenho</NavDropdown.Item>
                    <NavDropdown.Item href="/indexTipoLicitacao">Tipo de Licitação</NavDropdown.Item>
                    <NavDropdown.Item href="/indexFonteRecurso">Fonte Recurso</NavDropdown.Item>
                    <NavDropdown.Item href="/indexGrupoDespesa">Grupo Despesa</NavDropdown.Item>
                    <NavDropdown.Item href="/indexNaturezaDespesa">Natureza Despesa</NavDropdown.Item>
                    <NavDropdown.Item href="/indexProgTrabalho">Programa Trabalho</NavDropdown.Item>
                    <NavDropdown.Item href="/indexUnidGestora">Unidade Gestora</NavDropdown.Item>
                    <NavDropdown.Item href="/indexUnidOrcamentaria">Unidade Orçamentária</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link eventKey={2} href="#memes">
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>

                <Route exact path='/createFavorecido' component={ CreateFavorecido } />
                <Route path='/editFavorecido/:id' component={ EditFavorecido } /> 
                <Route path='/indexFavorecido' component={ IndexFavorecido } />
              
                <Route exact path='/createTipoEvento' component={ CreateTipoEvento } />
                <Route path='/editTipoEvento/:id' component={ EditTipoEvento } /> 
                <Route path='/indexTipoEvento' component={ IndexTipoEvento } />

                <Route exact path='/createTipoCredito' component={ CreateTipoCredito } />
                <Route path='/editTipoCredito/:id' component={ EditTipoCredito } /> 
                <Route path='/indexTipoCredito' component={ IndexTipoCredito } />

                <Route exact path='/createTipoEmpenho' component={ CreateTipoEmpenho } />
                <Route path='/editTipoEmpenho/:id' component={ EditTipoEmpenho } /> 
                <Route path='/indexTipoEmpenho' component={ IndexTipoEmpenho } />

                <Route exact path='/createTipoLicitacao' component={ CreateTipoLicitacao } />
                <Route path='/editTipoLicitacao/:id' component={ EditTipoLicitacao } /> 
                <Route path='/indexTipoLicitacao' component={ IndexTipoLicitacao } />

                <Route exact path='/createFonteRecurso' component={ CreateFonteRecurso } />
                <Route path='/editFonteRecurso/:id' component={ EditFonteRecurso } /> 
                <Route path='/indexFonteRecurso' component={ IndexFonteRecurso } />

                <Route exact path='/createGrupoDespesa' component={ CreateGrupoDespesa } />
                <Route path='/editGrupoDespesa/:id' component={ EditGrupoDespesa } /> 
                <Route path='/indexGrupoDespesa' component={ IndexGrupoDespesa } />

                <Route exact path='/createNaturezaDespesa' component={ CreateNaturezaDespesa } />
                <Route path='/editNaturezaDespesa/:id' component={ EditNaturezaDespesa } /> 
                <Route path='/indexNaturezaDespesa' component={ IndexNaturezaDespesa } />

                <Route exact path='/createProgTrabalho' component={ CreateProgTrabalho } />
                <Route path='/editProgTrabalho/:id' component={ EditProgTrabalho } /> 
                <Route path='/indexProgTrabalho' component={ IndexProgTrabalho } />

                <Route exact path='/createUnidGestora' component={ CreateUnidGestora } />
                <Route path='/editUnidGestora/:id' component={ EditUnidGestora } /> 
                <Route path='/indexUnidGestora' component={ IndexUnidGestora } />

                <Route exact path='/createUnidOrcamentaria' component={ CreateUnidOrcamentaria } />
                <Route path='/editUnidOrcamentaria/:id' component={ EditUnidOrcamentaria } /> 
                <Route path='/indexUnidOrcamentaria' component={ IndexUnidOrcamentaria } />

                <Route exact path='/createNad' component={ CreateNad } />
                <Route path='/editNad/:id' component={ EditNad } /> 
                <Route path='/indexNad' component={ IndexNad } />

            </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
