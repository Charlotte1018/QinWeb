import React from 'react';
import {hashHistory} from 'react-router';
import {Layout} from '../../components';
import {cookie, config} from '@/utils';
import {logout} from '@/api/home';
import store from 'store';
import styles from './style.less';

const {ERR_OK} = config;
const {removeToken} = cookie;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            marginLeft: '200px',
            menus: [],
            name: ''
        };
    }

    toggleMarginLeft() {
        this.setState((prevState) => ({
            marginLeft: prevState.marginLeft === '200px' ? '80px' : '200px'
        }));
    }

    componentDidMount() {
        this.setState({
            menus: store.get('menus'),
            name: store.get('name')
        });
    }

    render() {
        const {marginLeft, menus, name} = this.state;
        const {Sider, Header, Footer, Bread} = Layout;

        // props
        const headerProps = {
            name,
            toggleMarginLeft: () => this.toggleMarginLeft(),
            signOut: () => {
                logout()
                    .then((res) => {
                        if (res.error === ERR_OK) {
                            removeToken(); // 删除token
                            store.clearAll();  // 清空localStorage
                            hashHistory.push('/login');
                        }
                    });
            }
        };

        const siderProps = {
            menusTree: menus
        };

        const breadProps = {
            location: this.props.location.pathname.slice(1)
        };

        return (
            <div>
                <Sider {...siderProps}/>
                <div className={styles.container} style={{marginLeft: marginLeft}}>
                    <Header {...headerProps}/>
                    <div className={styles.content}>
                        <Bread {...breadProps}/>
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;
