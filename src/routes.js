import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export default function Routes(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sobre" component={About}/>
                <Route exact path="/projetos" component={Projects}/>
            </Switch>
        </BrowserRouter>
    );
}