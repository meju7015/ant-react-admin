import * as React from "react";

import DefaultMain from "../components/layouts/DefaultMain";

import {
    Layout,
    Row,
    Col, Timeline, Card
} from 'antd'
import 'antd/dist/antd.css';

const {Content} = Layout;

export default class Home extends React.Component {

    siteLayoutContentStyle = {
        background: '#fff',
    }

    render() {
        return (
            <>
                <DefaultMain active={1}>
                    <Row>
                        <Col span={6}>
                            <Card title="✍ Timeline" style={this.siteLayoutContentStyle}>
                                <Timeline>
                                    <Timeline.Item>유틸리티 사이트 생성 2021-02-01</Timeline.Item>
                                    <Timeline.Item>By React Nextjs 2021-02-01</Timeline.Item>
                                </Timeline>
                            </Card>
                        </Col>
                    </Row>
                </DefaultMain>

                <style jsx>{`
                  .site-layout-content {
                    padding: 24px;
                    background: #fff;
                  }

                  #components-layout-demo-top .logo {
                    float: left;
                    width: 120px;
                    height: 31px;
                    margin: 16px 24px 16px 0;
                    background: rgba(255, 255, 255, 0.3);
                  }

                  .ant-row-rtl #components-layout-demo-top .logo {
                    float: right;
                    margin: 16px 0 16px 24px;
                  }
                `}</style>
            </>
        )
    }
}
