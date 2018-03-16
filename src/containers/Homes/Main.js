import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Page } from '@/components';
import PropTypes from 'prop-types';
import styles from './styles.less';
import { complete, contract, draft, he, logo, logout, mine } from './svg.js';
import Header from './component/Header';
import Home from './component/Home';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    render() {
        const { loading } = this.state;

        const pageProps = { loading };
        const headerProps = { logo };

        return(
            <Page {...pageProps}>
                <Header></Header>
                <Home></Home>
            </Page>
        );
    }
}
export default Main;