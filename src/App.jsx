import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {browserHistory, Route} from 'react-router';
import {HashRouter as Router} from 'react-router-dom';
import {observer, Provider} from 'mobx-react';
import {Layout, Breadcrumb} from 'antd';
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
                    <Router history={browserHistory}>
                        <Layout className="f-page-container">
                            <Navigation />
                            <Breadcrumb style={{margin: '12px 24px'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                            </Breadcrumb>
                            <Layout.Content>
                                <Route exact path="/" component={Home}/>
                                <Route path="/test" component={Test}/>
                                <Route path="/contact" component={Contact}/>
                            </Layout.Content>
                            <Layout.Footer style={{textAlign: 'center'}}>
                                Turtle Development &copy;2017 Created by AmazingTurtle
                            </Layout.Footer>
                        </Layout>
                    </Router>
                </Provider>
            </div>
        );
    }
}