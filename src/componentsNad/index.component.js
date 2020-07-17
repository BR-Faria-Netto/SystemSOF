import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {nads: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/nads')
        .then(response => {
          this.setState({ nads: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.nads.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {

      axios.get('http://localhost:4000/nads')
      .then(response => {
        this.setState({ nads: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

      return (
        <div>
          <h3 align="center">Nads List</h3>
          <table className="table table-hover" style={{ marginTop: 20}}> 
            <thead>
              <tr>
                <th>Numero</th>
                <th>Processo</th>
                <th>Favorecido</th>
                <th>Valor</th>
                <th>Action</th>
                <th><Link to={'/createNad'} class="btn btn-sm btn-primary">Incluir</Link></th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }