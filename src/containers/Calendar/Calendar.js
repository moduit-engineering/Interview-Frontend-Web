import React, { Component, PropTypes } from 'react'

const dateStr = "";
var date = new Date();
class Calendar extends Component {
	dateStr =
	  date.getFullYear() + "-" +
	  ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
	  ("00" + date.getDate()).slice(-2) + " " +
	  ("00" + date.getHours()).slice(-2) + ":" +
	  ("00" + date.getMinutes()).slice(-2) + ":" +
	  ("00" + date.getSeconds()).slice(-2);
	//console.log(dateStr);
	//alert(dateStr)
}

export default Calendar
