import * as React from "react";
import MenuItem from "../../config/menu";
import Link from "next/link";

import { Menu, Layout, Typography } from "antd";

const { Sider } = Layout;
const { Title } = Typography;

export default class DefaultSider extends React.Component {

    gnbList = MenuItem.map(
        (item, i) => (
            <Menu.Item key={i + 1} icon={item.icon}>
                <Link href={item.route}>{item.label}</Link>
            </Menu.Item>
        )
    )

    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <Title level={2} style={{marginTop: 10, marginBottom: 10, color: 'white', textAlign: 'center'}}>
                    {this.props.title}
                </Title>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.selectedKey.toString()]}>
                    {this.gnbList}
                </Menu>
            </Sider>
        )
    }
}
