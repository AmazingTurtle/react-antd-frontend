import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {browserHistory, Route} from 'react-router';
import {HashRouter as Router} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';
import {Layout} from 'antd';
import DevTools from 'mobx-react-devtools';

import Stores from './stores';
import {Navigation} from './components';
import {Home, Test, Contact} from './pages';

@observer
export default class App extends Component {

    render() {
        return (
            <div>
                {process.env.NODE_ENV === 'development' ? <DevTools/> : ''}
                <Provider {...Stores}>
                    <Layout className="f-page-container">
                        <Router history={browserHistory}>
                            <div>
                                <Navigation />
                                <Route exact path="/" component={Home} />
                                <Route path="/test" component={Test} />
                                <Route path="/contact" component={Contact} />
                            </div>
                        </Router>
                    </Layout>
                </Provider>
            </div>
        );
    }
}