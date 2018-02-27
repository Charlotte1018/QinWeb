import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import { cookie } from '@/utils';

import App from '../containers/App';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Logins from '../containers/Login/login.js';
import { view as Dashboard } from '../containers/Dashboard';

import Test from '../containers/test';
import E500 from '../containers/Exception/500';
import E404 from '../containers/Exception/404';
import E403 from '../containers/Exception/403';

const { getToken } = cookie;

class RouterMap extends React.Component {
    render() {

        return (
            <Router history={this.props.history}>
                <Route component={App}>
                    <Route path="/" component={Home}
                        onEnter={(nextState, replace) => {
                            if (!getToken()) {
                                replace({ pathname: '/login' });
                            }
                        }}>>
                        <IndexRoute component={Dashboard} />
                        <Route path="dashboard" component={Dashboard} />
                        
                        {/* 404 */}
                        <Route path='/404' component={E404} />
                        <Route path='/500' component={E500} />
                        <Route path='/403' component={E403} />
                    </Route>
                    <Route path="login" component={Login}
                        onEnter={(nextState, replace) => {
                            if (getToken()) {
                                replace({ pathname: '/' });
                            }
                        }} />/>/>
                    <Route path='logins' component={Logins}>
                    </Route>
                    {/* 其他重定向到 404 */}
                    <Redirect from='*' to='/404' />
                </Route>
            </Router>
        );
    }
}

export default RouterMap;
