import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
<<<<<<< HEAD
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'
=======
>>>>>>> 2a0f446ee0edf7e1b521d07aab326212e438f29d

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
<<<<<<< HEAD
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
=======
>>>>>>> 2a0f446ee0edf7e1b521d07aab326212e438f29d
            </Switch>
        </BrowserRouter>
    )
}