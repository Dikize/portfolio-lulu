import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Curriculum from './pages/Curriculum'
import Portfolio from './pages/Portfolio'
import Knowledges from './pages/Knowledges'
import NotFound from './pages/NotFound'
import Motive from './pages/motive'

import './styles/styles.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/curriculum" component={Curriculum} />
                <Route path="/competences" component={Knowledges} />
                <Route path="/motive" component={Motive} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;