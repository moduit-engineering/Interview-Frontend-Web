import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import Table from '../../../components/Table'
import ApiService from '../../../service/ApiService'
import {alertMessage} from '../../../utils'
import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import Edit from '../components/EditForm';


//const TABLE_DATA = []
var data = [];

class TableView extends BaseContainer {
  state={
    header: [{
      title:"#",
      prop: "no"
  }, {
    title:"id",
    prop: "id"
    }, {
      title:"Title",
      prop: "title"
    }, {
      title:"Tag",
      prop:"tag"
  }, {
      title:"Action"
    }],
    data: data
  }

  componentWillMount() {
    this.setState({
      title: "Question 2"
    })
    ApiService.fetchQuestion2()
      .then(response => {
        this.setState({ 
          data: response.data 
        });
      })
      this.showLoading(true)
        setTimeout(() => {
          this.showLoading(false)
        }, 500);
  }


  _renderContent() {
    console.log(this.state)
    return <div className="portlet body">
      <Table
        searchableProperties={["id", "title","tag"]}
        hasTopBar={true}
        headers={this.state.header}
        data={this.state.data}
        rowRender={this._renderRow}
        onAddNewHandler={this.onAddNewClick.bind(this)}
      />
    </div>
  }

  onAddNewClick() {
    /* const newData = this.state.data.slice(0)
    newData.push(
      {"no": "", "id": "id", "title": "title", "tag": "tag"}
    )

    this.setState({
      data: newData
    }) */
  alert('Got to Add Data');
  }

  _renderRow(itm, i) {
    return <tr key={i} className="odd gradeX">
      <td>{i+1}</td>
      <td>{itm.id}</td>
      <td>{itm.title}</td>
      <td>{itm.tag}</td>
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
