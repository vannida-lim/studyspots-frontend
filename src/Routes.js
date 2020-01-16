import React from 'react'
import { Switch, Route } from 'react-router-dom'
import pages from './pages'

const Routes = () => {
    return (
    <Switch>
      <Route exact path="/" component={pages.Home} />   
      <Route path="/Auth" component={pages.Auth} />
      <Route path="/Profile" component={pages.Profile} />
    </Switch>
    )
}
export default Routes;