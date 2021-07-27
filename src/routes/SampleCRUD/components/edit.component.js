import React, { Component } from 'react';
import axios from 'axios';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';

//alert(Date.now());

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePlantDescr = this.onChangePlantDescr.bind(this);
    this.onChangePlantCode = this.onChangePlantCode.bind(this);
    this.onChangeRecCreated = this.onChangeRecCreated.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      plantDescr: '',
      plantCode: '',
      recCreated:''
    }
  }

  componentDidMount() {
      //axios.get('http://localhost:5000/api/CcaPlants/'+this.props.match.params.id)
      axios.get('http://localhost:5000/api/CcaPlants/18')
          .then(response => {
              this.setState({ 
                plantDescr: response.data.plantDescr, 
                plantCode: response.data.plantCode,
                recCreated: response.data.recCreated });
          })
          .catch(function (error) {
              console.log(error);
          })
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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      plantId : this.props.match.params.id,
      plantDescr: this.state.plantDescr,
      plantCode: this.state.plantCode,
      recCreated: '2016-07-12T14:58:25',
      recDatetime: '2019-11-29T17:22:38'
    };
    /* axios.put('http://localhost:5000/api/CcaPlants/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data)); */

    const options = {
      method: 'PUT',
      url: 'http://localhost:5000/api/CcaPlants/18',
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      data: {
        "plantId": "18",
        "plantDescr": "Test 2xx",
        "plantCode": "54321",
        "recCreated": "2020-02-10T21:56:54",
        "recDatetime": "2020-02-10T21:56:56"
      },
      timeout: 1000,
      responseType: 'json', // default
      responseEncoding: 'utf8', // default
      xsrfCookieName: 'XSRF-TOKEN', // default
      xsrfHeaderName: 'X-XSRF-TOKEN', // default
      proxy: {
        host: '127.0.0.1',
        port: 5000,
        /* auth: {
          username: 'mikeymike',
          password: 'rapunz3l'
        } */
      },
      transformRequest: [(data, headers, proxy) => {
        // transform the data

        return data;
      }]
    };

    // send the request
    axios.put(options);

    /* const url = 'http://localhost:5000/api/CcaPlants/18';
    axios.put((url,{crossDomain : true}), obj)
        .then(res => console.log(res.data));  */
    //const {plantId, plantDescr, plantCode, recCreated, recDatetime} = this.state.contact;
    /* const formData = new FormData();

    formData.append('plantId', this.props.match.params.id);
    formData.append('plantDescr', this.state.plantDescr);
    formData.append('plantCode', this.state.plantCode);
    formData.append('recCreated', '2016-07-12T14:58:25');
    formData.append('recDatetime', '2019-11-29T17:22:38');
    const url = 'http://localhost:5000/api/CcaPlants/'+this.props.match.params.id;
    axios({
        method: 'PUT',
        url,
        data: formData,
        config: {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
    })
    .then(resp => {
        console.log('Submission response', resp);
    })
    .catch(err => console.error(err)); */

    /*
    const url = 'http://localhost:5000/api/CcaPlants/'+this.props.match.params.id;
    fetch(proxyurl + url, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: {
        plantId: this.props.match.params.id,
        plantDescr: this.state.plantDescr,
        plantCode: this.state.plantCode,
        recCreated: '2016-07-12T14:58:25',
        recDatetime: '2019-11-29T17:22:38'
      }
    }); */
    /*
    var http = new XMLHttpRequest();
    var url = 'http://localhost:5000/api/CcaPlants/'+this.props.match.params.id;
    var params = 'plantDescr='+this.state.plantDescr+'&plantCode='+this.state.plantCode;
    http.open('PUT', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
    */
    /*
    var params =  'plantId='+this.props.match.params.id+
                  '&plantDescr='+this.state.plantDescr+
                  '&plantCode='+this.state.plantCode+
                  '&recCreated='+this.state.recCreated+
                  '&recDatetime=2019-11-29T17:22:38';

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('PUT', 'http://localhost:5000/api/CcaPlants/'+this.props.match.params.id);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    //return xhr;
    */
    

    // go to link after submit
    //this.props.history.push('../sample_crud');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Plant Name :  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.plantDescr}
                      onChange={this.onChangePlantDescr}
                      />
                </div>
                <div className="form-group">
                    <label>Plant Code : </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.plantCode}
                      onChange={this.onChangePlantCode}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Data" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}