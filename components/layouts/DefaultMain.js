import {Layout} from 'antd';

import * as React from "react";
import 'antd/dist/antd.css';

import DefaultFooter from "./DefaultFooter";
import DefaultSider from "./DefaultSider";
import DefaultHeader from "./DefaultHeader";

const {Content} = Layout;

const layoutStyle = {
    height: '100%'
}

export default class DefaultMain extends React.Component {

    selectedKey = this.props.active

    state = {
        collapsed: false
    }

    title = process.env.APP_NAME;

    toggle = async () => {
        this.setState({
            collapsed: !this.state.collapsed
        })

        this.title = this.state.collapsed
            ? process.env.APP_NAME
            : process.env.APP_NAME.charAt(0);
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

                <DefaultSider
                    title={this.title}
                    selectedKey={this.selectedKey}
                    collapsed={this.state.collapsed} />

                <Layout className="site-layout">
                    <DefaultHeader
                        toggle={this.toggle}
                        collapsed={this.state.collapsed} />

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
                    <DefaultFooter />
                </Layout>
            </Layout>
        );
    }
}
