import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import ApiService from '../../../service/ApiService'
import {Tab, TextInput, CheckBox, RadioGroup, Select, FileUpload} from '../../../components/UI'
import DataForm from '../../../components/DataForm'
import {alertMessage} from '../../../utils'

import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

const TABS_DATA = []
var dateStr = "";
var date = new Date();

class AddForm extends BaseContainer {
  constructor(props) {
    super(props);
    this.fromBodyRender = this.fromBodyRender.bind(this);
    this.fromSubmit = this.fromSubmit.bind(this);
    this.state = {
      isLoading: true
    };
  }


  componentWillMount() {
    this.setState({
      title: "Question 1"
    })
    dateStr =
    date.getFullYear() + "-" +
    ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
    ("00" + date.getDate()).slice(-2) + "T" +
    ("00" + date.getHours()).slice(-2) + ":" +
    ("00" + date.getMinutes()).slice(-2) + ":" +
    ("00" + date.getSeconds()).slice(-2);
    //alert(dateStr)
  }

  //--------------------------------------------------------------------//
  //  Form Content Renderer
  //--------------------------------------------------------------------//
  _renderContent() {
    const item = {
      plantDescr: "",
      plantCode: "",
      grInterval: 0,
      isInterval: 0,
      useEwm: 0,
      recCreated: dateStr,
      recDatetime: dateStr
    }

    return <DataForm
        title="Import CSV"
        hasCancel={true}
        item={item}
        bodyRender={this.fromBodyRender}
        onSubmit={itm => {
          
        }}
        onCancel={itm =>{
          alert("Data reset");
        }}
      />
  }

  fromSubmit(itm) {
    
  }

  fromBodyRender(options) {
    const {item, binding} = options
    return <div className="row">
      <div className="col-6 col-sm-9">
        <TextInput
          placeHolder="CSV File"
          helpText= "Choose File"
          type="file"
          {...binding("file")}
          />
      </div>
    </div>
  }
}

export default AddForm
