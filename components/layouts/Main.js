import Link from 'next/link';
import {Layout, Menu, Typography} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import * as React from "react";
import 'antd/dist/antd.css';

const {Header, Sider, Content} = Layout;
const {Title} = Typography;

const layoutStyle = {
    height: '100%'
}

class Main extends React.Component {

    state = {
        collapsed: false,
    };

    title = 'UTILITY'

    selectedKey = this.props.active

    componentDidMount() {
        console.log(this.props)
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });

        this.title = this.state.collapsed ? 'UTILITY' : 'U';
    };

    layoutStyle = {
        height: '100%'
    }

    getSelectedKey() {
        console.log(this.props.pathname);
    }

    render() {
        return (
            <Layout style={layoutStyle}>

                <style global jsx>{`
                  html,
                  body,
                  body > div:first-child,
                  div#__next,
                  div#__next > div {
                    height: 100%;
                  }
                `}</style>

                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <Title level={2} style={{marginTop: 10, marginBottom: 10, color: 'white', textAlign: 'center'}}>
                        {this.title}
                    </Title>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.selectedKey.toString()]}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link href="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            <Link href="/healthCheck">Health Check</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0, backgroundColor: 'white'}}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                            style: {
                                marginLeft: 30
                            }
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Main;
