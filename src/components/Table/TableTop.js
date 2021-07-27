import React, { Component, PropTypes } from 'react'
import Pagination from '../Pagination'
import classNames  from 'classnames';
import {makeRowCompare, makeFuzzyFilter} from '../../utils/text'

import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

/* @Table Top Button
  AddNew, Actions
*/
class TableTop extends Component {
  // start construct button add and view
  constructor() {
    super();
    
    this.addButton = this.addButton.bind(this);
    this.viewButton = this.viewButton.bind(this);
    this.state = {
      isHidden: false,
      isLoading: true
    }
  }
  
  addButton() {
  //alert('Data add tampil');
  this.setState((prevState) => {
    return{
     isHidden: !prevState.isHidden
    };
  });
  //document.getElementById("btnAdd").style.display = 'none';
  }
  
  viewButton(){
  //alert('Data view tampil');
  this.setState((prevState) => {
    return{
      isHidden: !prevState.isHidden
    };
  });
  //document.getElementById("btnAdd").style.display = '';
  }
  // start construct button add and view

  static propTypes = {

    // add new handler
    onAddNewHandler: React.PropTypes.func,
  }

  render() {
    const {onAddNewHandler} = this.props

    return <div className="table-toolbar">
      <div className="row">
        <div className="col-md-6">
          <div className="btn-group">
            <Link to="/Create" className="btn sbold green" id="btnAdd" onClick={this.addButton}>ADD NEW<i className="fa fa-plus"></i></Link>
            {this.state.isHidden && (
              <Link to="/View" className="btn sbold blue" onClick={this.viewButton} id="btnView">VIEW DATA<i className="fa fa-list-alt "></i></Link>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="btn-group pull-right">
            <button className="btn green  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
              <i className="fa fa-angle-down"></i>
            </button>
            <ul className="dropdown-menu pull-right">
              <li>
                <a href="javascript:;">
                  <i className="fa fa-print"></i> Print </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-file-pdf-o"></i> Save as PDF </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-file-excel-o"></i> Export to Excel </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  }
}

export default TableTop
