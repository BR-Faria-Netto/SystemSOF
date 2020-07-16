import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import CreateBus from './componentsBus/create.component';
import EditBus from './componentsBus/edit.component';
import IndexBus from './componentsBus/index.component';

import CreateNad from './componentsNad/create.component';

import CreateTipo from './componentsTipo/create.component';
import EditTipo from './componentsTipo/edit.component';
import IndexTipo from './componentsTipo/index.component';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title="Menu" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/indexTipo">Tipo</NavDropdown.Item>
                    <NavDropdown.Item href="/indexPerson">Person</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/CreateNad">Nad</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/createPerson' component={ CreateBus } />
                <Route path='/editPerson/:id' component={ EditBus } /> 
                <Route path='/indexPerson' component={ IndexBus } />
                <Route exact path='/createTipo' component={ CreateTipo } />
                <Route path='/editTipo/:id' component={ EditTipo } /> 
                <Route path='/indexTipo' component={ IndexTipo } />

                <Route exact path='/createNad' component={ CreateNad } />

            </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
