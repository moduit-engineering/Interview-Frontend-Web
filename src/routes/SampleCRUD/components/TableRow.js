import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {


  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        /* axios.get('http://localhost:5000/api/CcaPlants/'+this.props.obj.plantId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err)) */
        var params =  'plantId='+this.props.obj.plantId+
                  '&plantDescr='+this.props.obj.plantDescr+
                  '&plantCode='+this.props.obj.plantCode+
                  '&recCreated='+this.props.obj.recCreated+
                  '&recDatetime=2019-11-29T17:22:38';

        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open('DEL', '/CcaPlants/'+this.props.obj.plantId);
        xhr.onreadystatechange = function() {
            if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
        };
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }

  //alert("Ini data :"+this.props.obj._id);

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.plantId}
          </td>
          <td>
            {this.props.obj.plantDescr}
          </td>
          <td>
            {this.props.obj.plantCode}
          </td>
          <td>
            {this.props.obj.recCreated}
          </td>
          <td>
            <Link to={"./edit/"+this.props.obj.plantId} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;