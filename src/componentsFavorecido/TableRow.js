import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends React.Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/favorecidos/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.nomefav}
          </td>
          <td>
            {this.props.obj.cnpj}
          </td> 
          <td>
            {this.props.obj.ender}
          </td>
          <td>
            {this.props.obj.bai}
          </td>
          <td>
            {this.props.obj.cid}
          </td>
          <td>
            <Link to={"/editFavorecido/"+this.props.obj._id} className="btn btn-sm btn-primary">Alterar</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-sm btn-danger">Excluir</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;