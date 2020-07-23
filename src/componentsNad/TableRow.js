import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends React.Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/nads/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.numnad}
          </td>
          <td>
            {this.props.obj.procnad}
          </td> 
          <td>
            {this.props.obj.datanad}
          </td>
          <td>
            {this.props.obj.nomefav}
          </td>
          <td>
            {this.props.obj.valor}
          </td>
          <td>
            {this.props.obj.evenad}
          </td>
          <td>
            {this.props.obj.unigest}
          </td>
          <td>
            {this.props.obj.progtrab}
          </td>
          <td>
            {this.props.obj.natdesp}
          </td>
          <td>
            {this.props.obj.fontrec}
          </td>
          <td>
            <Link to={"/editNad/"+this.props.obj._id} className="btn btn-sm btn-primary">Alterar</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-sm btn-danger">Excluir</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;