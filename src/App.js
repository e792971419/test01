import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './pages/login'

import Admin from './pages/admin'

import NotFound from './pages/notFound'

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/admin" exact component={Admin} />
                    <Redirect to="/login" from="/" exact/>
                    <Route to="/*" component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default App