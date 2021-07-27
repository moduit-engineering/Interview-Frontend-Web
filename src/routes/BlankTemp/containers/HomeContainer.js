import React from 'react';
import BaseContainer from '../../../containers/BaseContainer';
import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
 
import Create from '../components/AddForm';
import Edit from '../components/EditForm';
import View from '../components/TableView';

import ErrorPage from './ErrorPage';
 

class HomeContainer extends BaseContainer {
  constructor() {
    super();
    //this.Create = this.Create.bind(this);
    //this.View = this.View.bind(this);
    //this.Child = this.Child.bind(this);
    /*this.state = {
      isHidden: false,
    } */
  }

  componentWillMount() {
    this.setState({
      title: "Plant Area"
    });
  }

  
  render() {
    return (      
      <BrowserRouter>
        <Switch>
          <Route exact path='/Create' component={ Create } />
          <Route path='/Edit/:id' component={ Edit } /> 
          <Route path='/View' component={ View } /> 
          <Route path="/" component={View}/>
          <Route component={Create}/>
        </Switch>
      </BrowserRouter>
    )
  }
  
}



   
 
export default HomeContainer;
