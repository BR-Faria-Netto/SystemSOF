import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import serverapi from '../serverapi';

class TableRow extends React.Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get(serverapi.name+'tipolicitacoes/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.codigo}
          </td>
          <td>
            {this.props.obj.descricao}
          </td>
          <td>
            <Link to={"/editTipoLicitacao/"+this.props.obj._id} className="btn btn-sm btn-primary">Alterar</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-sm btn-danger">Excluir</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;