import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import {Tab, TextInput, CheckBox, RadioGroup, Select} from '../../../components/UI'
import DataForm from '../../../components/DataForm'
import {alertMessage} from '../../../utils'

const TABS_DATA = []

class AddForm extends BaseContainer {
  componentWillMount() {
    /* this.setState({
      title: "Add Data",
      name: ""
    }) */
  }

  //--------------------------------------------------------------------//
  //  Form Content Renderer
  //--------------------------------------------------------------------//
  _renderContent() {
    const item = {
      plantDescr: "",
      plantCode: "",
      server: "",
      remember1: false,
    remember2: false
    }

    return <div>
      <DataForm
        title="Data Binding Sample"
        hasCancel={true}
        item={item}
        bodyRender={this.fromBodyRender}
        onSubmit={itm => {
          alertMessage({message: JSON.stringify(itm)})
        }}
        onCancel={e =>{
          alert("cancel")
        }}
      />
    </div>
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
