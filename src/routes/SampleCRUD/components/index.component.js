import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Table from '../../../components/Table'
import {Button} from '../../../components/UI'
import {alertMessage} from '../../../utils'
import DataForm from '../../../components/DataForm'


axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
//var cca_plants = [];
//export default class Index extends Component {
//class Index extends BaseContainer {
export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
        cca_plants: []
      };
    }
  
    componentDidMount(){
      /* axios.get('http://localhost:5000/api/CcaPlants')
        .then(response => {
          this.setState({ cca_plants: response.data });
        })
        .catch(function (error) {
          console.log(error);
        }) */
      axios.get('http://localhost:5000/api/CcaPlants')
        .then(response => {
          this.setState({ 
            cca_plants: response.data 
          });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.cca_plants.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }



    render() {
      return (
        <div>CCA Plants List
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Plant ID</th>
                <th>Plant Name</th>
                <th>Plant Code</th>
                <th>Created</th>
                <th colSpan="2">Action</th>
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