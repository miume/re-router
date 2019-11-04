import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import {HashRouter as Router,Switch,Route} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path={'/'} component={Login}/> {/* exact如果为 true，则只有在 path 完全匹配 location.pathname 时才匹配 */}
            <Route component={Home}/>  {/* 路由下有子路又那么就不用path */}
        </Switch>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
