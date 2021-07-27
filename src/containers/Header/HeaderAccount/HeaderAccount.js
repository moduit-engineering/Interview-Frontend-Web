import React, { Component, PropTypes } from 'react'
import HeaderNotification from '../../../components/HeaderNotification'
import ApiService from '../../../service/ApiService'

//const DefaultAvatar = "https://avatars3.githubusercontent.com/u/10923944?s=60"
const DefaultAvatar = "http://127.0.0.1:3000/e5691977d9fc5b9a3cfc345f4f9a619c.png"
var data = [];

class HeaderAccount extends Component {
  static propTypes = {
    notificationClick: PropTypes.func,
    generalInfo: PropTypes.object,
    logOutClick: PropTypes.func
  }

  state={
    header: [{
      prop: "id"
    }, {
      prop: "title"
    }, {
      prop:"tag"
    }],
    data: data
  }

  componentWillMount() {
    ApiService.fetchQuestion2()
      .then(response => {
        this.setState({ 
          data: response.data 
        });
      })
  }

  render () {
    const {notificationClick, logOutClick, generalInfo} = this.props
    const notifications = generalInfo.notifications || []
    const avatar = generalInfo.avatar || DefaultAvatar
    const displayName = generalInfo.displayName || "-"
    var plantAreaDefault = generalInfo.plantAreaName || "-"


    const selectArea = data.map((item, index) => {
      return (
        <li key={index}>
          <a href="javascript:;" >
            <span className="time">Show</span>
            <span className="details">
              <span className="label label-sm label-icon label-success">
                <i className="fa fa-plus"></i>
              </span> {item.title} {item.tag} </span>
          </a>
        </li>
      );
    });


    return (
      <div className="top-menu">
        <ul className="nav navbar-nav pull-right">
          <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
            { notifications && notifications.length > 0 && <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <i className="icon-bell"></i>
              <span className="badge badge-default"> { notifications.length} </span>
            </a> }
            <ul className="dropdown-menu">
              { notifications.map((itm, i) => <HeaderNotification key={i} {...itm}
                onClick={_=> { notificationClick && notificationClick(itm) }} />)
              }
            </ul>
          </li>


          <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
              <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                <i className="glyphicon glyphicon-home"></i>
                <span className="badge badge-default"> {plantAreaDefault}</span>
              </a>
              <ul className="dropdown-menu">
                  <li className="external">
                    <h3>
                      <span className="bold">8 Available</span> Plants</h3>
                    <a href="/">view all</a>
                  </li>
                  <li>
                    <div className="slimScrollDiv"><ul className="dropdown-menu-list scroller">
                      <li>
                        <a href="javascript:;" onClick={_ => { plantAreaNameChange && plantAreaNameChange("Ccai Cikedokan Plant (3025)") }}>
                          <span className="time">Show</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-success">
                              <i className="fa fa-plus"></i>
                            </span> Ccai Cikedokan Plant (3025) </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" onClick={_ => { plantAreaNameChange && plantAreaNameChange("Ccai Semarang Plant (3035)") }}>
                          <span className="time">Show</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-success">
                              <i className="fa fa-plus"></i>
                            </span> Ccai Semarang Plant (3035) </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" onClick={_ => { plantAreaNameChange && plantAreaNameChange("Ccai Bandung Plant (3030)") }}>
                          <span className="time">Show</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-success">
                              <i className="fa fa-plus"></i>
                            </span> Ccai Bandung Plant (3030) </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" onClick={_ => { plantAreaNameChange && plantAreaNameChange("Ccai Surabaya Plant (3040)") }}>
                          <span className="time">Show</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-success">
                              <i className="fa fa-plus"></i>
                            </span> Ccai Surabaya Plant (3040) </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" onClick={_ => { plantAreaNameChange && plantAreaNameChange("Ccai Lampung Plant (3010)") }}>
                          <span className="time">Show</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-success">
                              <i className="fa fa-plus"></i>
                            </span> Ccai Lampung Plant (3010) </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" onClick={_ => { plantAreaNameChange && plantAreaNameChange("Ccai Medan Plant (3000)") }}>
                          <span className="time">Show</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-success">
                              <i className="fa fa-plus"></i>
                            </span> Ccai Medan Plant (3000) </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" onClick={_ => { plantAreaNameChange && plantAreaNameChange("Ccai Bali Plant (3045)") }}>
                          <span className="time">Show</span>
                          <span className="details">
                            <span className="label label-sm label-icon label-success">
                              <i className="fa fa-plus"></i>
                            </span> Ccai Bali Plant (3045) </span>
                        </a>
                      </li>
                    </ul><div className="slimScrollBar"></div><div className="slimScrollRail"></div></div>
                  </li>
              </ul>
          </li>

          

          <li className="dropdown dropdown-user">
            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <img alt="" className="img-circle" src={avatar} />
              <span className="username username-hide-on-mobile"> {displayName} </span>
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-default">
              <li>
                <a href="">
                  <i className="icon-user"></i> My Profile
                </a>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-quick-sidebar-toggler">
            <a href="javascript:;" className="dropdown-toggle">
              <i className="icon-logout" onClick={_ => {
                logOutClick && logOutClick()
              }} ></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

HeaderAccount.defaultProps = {
  generalInfo: {},
  notificationClick : (itm) => {console.log("goto notify logout", itm)},
  logOutClick : () => {console.log("logout")},
  plantAreaNameChange : () => {console.log(this)}
}

export default HeaderAccount
