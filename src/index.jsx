import {AppContainer} from 'react-hot-loader';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import React from 'react';
import ReactDOM from 'react-dom';
import mobx from 'mobx';
import App from './App';
import './index.style.less';

mobx.useStrict(true);

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <LocaleProvider locale={enUS}>
                <Component />
            </LocaleProvider>
        </AppContainer>
        , document.getElementById('application'));
};


render(App);

if (module.hot)
    module.hot.accept('App', (NewApp) => render(NewApp));