import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class Home extends Component {

    render() {
        return (
            <h1>Home</h1>
        );
    }
}