import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import Table from '../../../components/Table'
//import {Button} from '../../../components/UI'
import {alertMessage} from '../../../utils'
import axios from 'axios'
import cors from 'cors'
// Add the component for AddForm 08 Feb 2020
import {Tab, TextInput, CheckBox, RadioGroup, Select} from '../../../components/UI'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Create from '../components/AddForm';
import Edit from '../components/EditForm';
import View from '../components/TableView';



//const TABLE_DATA = []
var data = [];

class TableView extends BaseContainer {
  state={
    header: [{
      title:"#",
      prop: "no"
    }, {
      title:"Plant Area",
      prop: "plantDescr"
    }, {
      title:"Plant Code",
      prop:"plantCode"
    }, {
      title:"Action"
    }],
    data: data
  }

  componentWillMount() {
    this.setState({
      title: "Data Plant Area"
    })
    const apiUrl = 'http://localhost:5000/api/CcaPlants';
      fetch(apiUrl)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              data: result
              //TABLE_DATA: result
            });
          },
          (error) => {
            this.setState({ error });
          }
        )
      this.showLoading(true)
        setTimeout(() => {
          this.showLoading(false)
        }, 500);
  }



  _renderContent() {
    console.log(this.state)
    return <div className="portlet body">
      <Router>
        <div>
          <Link to={'/create'} className="btn sbold green" onClick={this.hiddenContent}>ADD NEW<i className="fa fa-plus"></i></Link>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
          </Switch>
        </div>
      </Router>
      <div id="divTable">
        <Table
          searchableProperties={["plantDescr","plantCode"]}
          hasTopBar={true}
          headers={this.state.header}
          data={this.state.data}
          rowRender={this._renderRow}
          onAddNewHandler={this.onAddNewClick.bind(this)}
        />
      </div>
    </div>
  }

  hiddenContent(e) {
    document.getElementById("divTable").style.display = "none";
  }


  onAddNewClick() {
    this.setState({
      title: "Add Plant Area"
    })
  }

  
  _renderRow(itm, i) {
    return <tr key={i} className="odd gradeX">
      <td>{i+1}</td>
      <td>{itm.plantDescr}</td>
      <td>{itm.plantCode}</td>
      <td>
        <div className="btn-group">
          <button className="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false"> Actions
            <i className="fa fa-angle-down"></i>
          </button>
          <ul className="dropdown-menu pull-left" role="menu">
            <li>
              <a href="javascript:;">
                <i className="icon-flag"></i> Area Name
                <span className="badge badge-success">4</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i className="glyphicon glyphicon-tags"></i> Area Code </a>
            </li>
            <li className="divider"> </li>
            <li>
              <a href="javascript:;">
                <i className="glyphicon glyphicon-trash"></i> Delete </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  }
}

export default TableView
