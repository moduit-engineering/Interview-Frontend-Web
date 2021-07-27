import HomeContainer from './containers/HomeContainer'
//import IndexComponent from './components/index.component'



// Sync route definition

export default (store) => ({
  path : 'blank_temp',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {

      /*  Return getComponent   */
      cb(null, HomeContainer)

    /* Webpack named bundle   */
  }, 'blank_temp') 
  }
})
