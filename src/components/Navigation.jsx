import React, {Component} from 'react';
import {observer} from 'mobx-react';
//noinspection JSUnresolvedVariable
import {observable, action} from 'mobx';
import { Layout, Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

@observer
export default class Navigation extends Component {

    //noinspection JSUnusedGlobalSymbols,JSUnresolvedFunction,JSUnresolvedVariable
    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.shape({
                push: PropTypes.func.isRequired,
                replace: PropTypes.func.isRequired,
                createHref: PropTypes.func.isRequired
            }).isRequired
        }).isRequired
    };

    routes = [
        {
            key: 'home',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            key: 'test',
            icon: 'link',
            text: 'Test Page',
            link: '/test'
        },
        {
            key: 'contact',
            icon: 'user',
            text: 'Contact Me',
            link: '/contact'
        }
    ];

    @observable
    current = 'home';

    handleNavigate = action((e) => {
        if (this.current === e.key) { return; }
        this.current = e.key;
        const { history } = this.context.router;
        history.push(this.routes.find(route => route.key === e.key).link);
    });

    render() {

        const navigation = this.routes.map(route => (
            <Menu.Item key={route.key}>
                <Icon type={route.icon} /> {route.text}
            </Menu.Item>
        ));

        return (
            <Layout.Header>
                <Menu onClick={this.handleNavigate}
                      selectedKeys={[this.current]}
                      mode="horizontal"
                      theme="dark"
                      style={{ lineHeight: '64px' }}
                >
                    {navigation}
                </Menu>
            </Layout.Header>
        );
    }
}