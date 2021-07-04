import React from 'react';
import BaseContainer from '../../../containers/BaseContainer';
import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
 
import Create from '../components/AddForm';
import Edit from '../components/EditForm';
import View from '../components/TableView';
 

class HomeContainer extends BaseContainer {
  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      title: "Question 1"
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