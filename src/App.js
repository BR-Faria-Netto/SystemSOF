import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import CreateFavorecido from './componentsFavorecido/create.component';
import EditFavorecido from  './componentsFavorecido/edit.component';
import IndexFavorecido from './componentsFavorecido/index.component';

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
                    <NavDropdown.Item href="/indexTipoEvento">Tipo de Evento</NavDropdown.Item>
                    <NavDropdown.Item href="/indexFonteRecurso">Fonte Recurso</NavDropdown.Item>
                    <NavDropdown.Item href="/indexNaturezaDespesa">Natureza Despesa</NavDropdown.Item>
                    <NavDropdown.Item href="/indexProgTrabalho">Programa Trabalho</NavDropdown.Item>
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

                <Route exact path='/createFonteRecurso' component={ CreateFonteRecurso } />
                <Route path='/editFonteRecurso/:id' component={ EditFonteRecurso } /> 
                <Route path='/indexFonteRecurso' component={ IndexFonteRecurso } />

                <Route exact path='/createNaturezaDespesa' component={ CreateNaturezaDespesa } />
                <Route path='/editNaturezaDespesa/:id' component={ EditNaturezaDespesa } /> 
                <Route path='/indexNaturezaDespesa' component={ IndexNaturezaDespesa } />

                <Route exact path='/createProgTrabalho' component={ CreateProgTrabalho } />
                <Route path='/editProgTrabalho/:id' component={ EditProgTrabalho } /> 
                <Route path='/indexProgTrabalho' component={ IndexProgTrabalho } />

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
