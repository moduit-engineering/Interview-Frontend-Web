import axios from 'axios';


const API_BASE_URL = '/proxy/backend';
// const idVal = urlParams.get('id');
/* if(idVal) {
    alert(idVal);
} else {
    //alert('id tidak ditemukan...!');
    idVal = 1;
} */



class ApiService {
//############## Question1
    fetchQuestion1() {
        return axios.get(API_BASE_URL + '/question/one');
    }

    fetchQuestion1ById(Id) {
        return axios.get(API_BASE_URL + '/question/one' + '/' + Id);
    }

    deleteQuestion1(Id) {
        return axios.delete(API_BASE_URL + '/question/one' + '/' + Id);
    }

    addQuestion1(data) {
        return axios.post(""+API_BASE_URL + '/question/one', data);
    }

    editQuestion1(Id,data) {
        return axios.put(API_BASE_URL  + '/question/one'+ '/' + Id, data);
    }

    fetchQuestion1Last() {
        return axios.get(API_BASE_URL + '/question/one/Last');
    }

    fetchGetQuestion1byId(Id) {
        return axios.get(API_BASE_URL + '/question/one' + '/GetQuestion1byId/' + Id);
    }


//############## Question2
    fetchQuestion2() {
        return axios.get(API_BASE_URL + '/question/two');
    }

    fetchQuestion2ById(Id) {
        return axios.get(API_BASE_URL + '/question/two' + '/' + Id);
    }

    deleteQuestion2(Id) {
        return axios.delete(API_BASE_URL + '/question/two' + '/' + Id);
    }

    addQuestion2(data) {
        return axios.post(""+API_BASE_URL + '/question/two', data);
    }

    editQuestion2(Id,data) {
        return axios.put(API_BASE_URL  + '/question/two'+ '/' + Id, data);
    }

    fetchQuestion2Last() {
        return axios.get(API_BASE_URL + '/question/two/Last');
    }

    fetchGetQuestion2byId(Id) {
        return axios.get(API_BASE_URL + '/question/two' + '/GetQuestion2byId/' + Id);
    }


}

export default new ApiService();