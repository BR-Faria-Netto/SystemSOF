import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/business')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {

      axios.get('http://localhost:4000/business')
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

      return (
        <div>
          <h3 align="center">Business List</h3>
          <table className="table table-hover" style={{ marginTop: 20}}> 
            <thead>
              <tr>
                <th>Person</th>
                <th>Business</th>
                <th>GST Number</th>
                <th>Operadora</th>
                <th>Action</th>
                <th>
                </th>
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