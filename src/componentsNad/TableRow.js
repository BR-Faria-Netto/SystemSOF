import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends React.Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.business_name}
          </td>
          <td>
            {this.props.obj.business_gst_number}
          </td>
          <td>
            {this.props.obj.operadora_name}
          </td>
          <td>
            <Link to={"/editPerson/"+this.props.obj._id} className="btn btn-sm btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;