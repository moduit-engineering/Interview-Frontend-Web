import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import ApiService from '../../../service/ApiService'
import {Tab, TextInput, CheckBox, RadioGroup, Select} from '../../../components/UI'
import DataForm from '../../../components/DataForm'
import {alertMessage} from '../../../utils'

import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
//import View from '../components/TableView';

const TABS_DATA = []

class AddForm extends BaseContainer {
  handleSubmitted = ({ res, fields, form }) => {
    form.reset() // resets view
  }

  /*
  constructor(props){
    super(props);
    this.state ={
      plantDescr: "",
      plantCode: "",
      server: "",
      recCreated: "2015-02-06T09:55:39",
      recDatetime: "2015-04-22T15:57:32",
    }
    this.saveData = this.saveData.bind(this);
  }
  

  saveData = (e) => {
    e.preventDefault();
      let data = {
        plantDescr: this.state.plantDescr, 
        plantCode: this.state.plantCode, 
        recCreated: "2015-02-06T09:55:39",
        recDatetime: "2015-04-22T15:57:32",
      };
      ApiService.addCcaPlants(data)
          .then(res => {
              this.setState({message : 'Data added successfully.'});
              this.props.history.push(View);
          });
    }
  */

  componentWillMount() {
    /*
    this.setState({
      title: "Add Plants",
      name: ""
    }) 
    */
  }

  //--------------------------------------------------------------------//
  //  Form Content Renderer
  //--------------------------------------------------------------------//
  _renderContent() {
    const item = {
      plantDescr: "",
      plantCode: "",
      server: "",
      recCreated: "2020-02-14T09:55:39",
      recDatetime: "2020-02-14T15:57:32",
      remember1: false,
      remember2: false
    }

    //const [setInputItems] = this.setState(item);

    return <DataForm
        title="Add Plants"
        hasCancel={true}
        item={item}
        bodyRender={this.fromBodyRender}
        onSubmit={itm => {
          //alertMessage({message: JSON.stringify(itm)})
          ApiService.addCcaPlants(itm)
            .then(res => {
                //this.setState({message : 'Data added successfully.'});
                this.props.history.push(View)
            })
            alertMessage({message: 'Data added successfully.'})
        }}
        onCancel={itm =>{
          //alert("cancel")
          //alert(JSON.stringify(itm))
          //setInputItems(itm)
          //document.getElementById("FormInput1").reset();
          //itm.preventDefault();
          //this.setState(this.itm);/
        }}
      />
  }

  fromBodyRender(options) {
    const {item, binding} = options
    return <div className="row">
      <div className="col-xs-3 col-md-5">
        <TextInput
        placeHolder="Plant Name"
            helpText= ""
            {...binding("plantDescr")}
          />
      </div>
      <div className="col-xs-3 col-md-5">
        <TextInput
          placeHolder="Plant Code"
          helpText= ""
          {...binding("plantCode")}
        />
      </div>
      <div className="col-sm-4">
        <CheckBox
          placeHolder="GR does not use real-time data"
          {...binding("remember1")}
        />
      </div>
      <div className="col-xs-6 col-md-2">
        <TextInput
          placeHolder="Second(s)"
          helpText= ""
          {...binding("")}
        />
      </div>
      <div className="col-sm-8">
        <CheckBox
          placeHolder="Using EWM System"
          {...binding("remember2")}
        />
      </div>
    </div>
  }
}

export default AddForm
