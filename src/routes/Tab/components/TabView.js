import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import {Tab, TextInput, CheckBox, RadioGroup, Select} from '../../../components/UI'
import DataForm from '../../../components/DataFormBackup'
import {alertMessage} from '../../../utils'

const TABS_DATA = [{
  title: "Basic UI Comps",
  render: () => {return <h3> default tab1 </h3>}
},{
  title: "Form Binding",
  render: () => {return <h3> default tab2 </h3>}
}]

class TabView extends BaseContainer {
  componentWillMount() {
    this.setState({
      title: "Tab & UI Components",
      name: ""
    })

    // Switch contex for render methods
    TABS_DATA[0].render = () => this._renderTab1()
    TABS_DATA[1].render = () => this._renderTab2()
  }

  _renderContent() {
    return <div className="portlet body">
      <div className="row">
        <Tab tabs={TABS_DATA} />
      </div>
    </div>
  }

  //--------------------------------------------------------------------//
  //  Tab Content Renderer
  //--------------------------------------------------------------------//
  _renderTab1() {
    const {name, gen} = this.state

    return <div>
      <h3>My Name Is: {name}</h3>
      <div className="row">
        <div className="col-sm-2">
          <TextInput
            placeHolder="Id"
            helpText= "Input your description here...."
            value="01"
            enable={false}
          />
        </div>

        <div className="col-sm-2">
          <TextInput
            icon="envelope-o"
            placeHolder="Name"
            helpText= "Input your name here...."
            onValueChange = {val => {
              this.setState({
                name: val
              })
            }}
          />
        </div>
        <div className="col-sm-2">
          <TextInput
            multi={true}
            placeHolder="Description"
            helpText= "Input your description here...."
          />
        </div>

        <div className="col-sm-2">
          <CheckBox
            placeHolder="Is SuperMan"
          />
        </div>

        <div className="col-sm-2">
          <RadioGroup
            placeHolder="Sex"
            options={[{title:"Male", value: "male"},{title:"Female", value: "female"}]}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <Select
            placeHolder="Role"
            value="user"
            options={[{title:"User", value: "user"},
              {title:"Supervisor", value: "supervisor"},
              {title:"Admin", value: "admin"}]} />
        </div>
        <div className="col-sm-2">
          <Select
            placeHolder="Country"
            value={["vn"]}
            multi={true}
            options={[{title:"VN", value: "vn"},
              {title:"US", value: "us"},
              {title:"Singapore", value: "singapore"}]} />
        </div>
      </div>
    </div>
  }

  _renderTab2() {
    const item = {
      username: "tintatoi",
      password: "",
      server: "S1",
      remember: false
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
    return <div className="row" >
      <div className="col-sm-4">
        <TextInput
          placeHolder="User Name"
          helpText= "Input your name here...."
          {...binding("username")}
        />
      </div>
      <div className="col-sm-4">
        <TextInput
          type="password"
          placeHolder="Password"
          helpText= "Password here...."
          {...binding("password")}
        />
      </div>
      <div className="col-sm-8">
        <Select
          placeHolder="Server"
          options={[
            {title:"Server 1", value: "S1"},
            {title:"Server 2", value: "S2"},
            {title:"Server 3", value: "S3"}]}
          {...binding("server")}
        />
      </div>
      <div className="col-sm-8">
        <CheckBox
          placeHolder="Remember"
          {...binding("remember")}
        />
      </div>
    </div>
  }
}

export default TabView
