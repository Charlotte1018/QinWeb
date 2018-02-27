import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store';
import './index.less';

import RouteMap from './router/routeMap';

ReactDOM.render((
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
