import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register'
import Profile from './pages/Profile';
import Newincident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/registrar" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={Newincident}/>
            </Switch>
        </BrowserRouter>
    )
}