import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePlantDescr = this.onChangePlantDescr.bind(this);
    this.onChangePlantCode = this.onChangePlantCode.bind(this);
    this.onChangeRecCreated = this.onChangeRecCreated.bind(this);
    this.onChangeRecDateTime = this.onChangeRecDateTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      plantDescr: '',
      plantCode: '',
      recCreated:'',
      recDatetime:''
    }
  }
  onChangePlantDescr(e) {
    this.setState({
      plantDescr: e.target.value
    });
  }
  onChangePlantCode(e) {
    this.setState({
      plantCode: e.target.value
    })  
  }
  onChangeRecCreated(e) {
    this.setState({
      recCreated: e.target.value
    })
  }
  onChangeRecDateTime(e) {
    this.setState({
      recDatetime: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      plantDescr: this.state.plantDescr,
      plantCode: this.state.plantCode,
      recCreated: '2020-02-12 11:35:00.000',
      recDatetime: '2020-02-12 11:37:30.000'
    };
    axios.post('http://localhost:5000/api/CcaPlants', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      plantDescr: '',
      plantCode: '',
      recCreated: '',
      recDatetime: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Plant Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.plantDescr}
                      onChange={this.onChangePlantDescr}
                      />
                </div>
                <div className="form-group">
                    <label>Plant Code: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.plantCode}
                      onChange={this.onChangePlantCode}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Add Data" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}