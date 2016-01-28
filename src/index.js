import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import LoserPoolApp from './components/LoserPoolApp';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

render((
        <Router history={browserHistory} >
          <Route path="/" component={LoserPoolApp}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
          </Route>
        </Router>
      ), document.getElementById('app')
);
