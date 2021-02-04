import * as React from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

import { Layout } from "antd";

const { Header } = Layout;

export default class DefaultHeader extends React.Component {

    siteLayoutBackground = {
        background: '#fff',
    }

    render() {
        return (
            <Header
                style={this.siteLayoutBackground}>
                {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.props.toggle,
                })}
            </Header>
        )
    }
}
