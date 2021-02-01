import Main from "../components/layouts/Main";

import {Layout} from 'antd'
import {Timeline} from "antd";
import 'antd/dist/antd.css';

const {Content} = Layout;

export default function Home() {
    return (
        <div>
            <Main active={1}>
                <Content>
                    <div className="site-layout-content">
                        <Timeline>
                            <Timeline.Item>유틸리티 사이트 생성 2021-02-01</Timeline.Item>
                            <Timeline.Item>By React Nextjs 2021-02-01</Timeline.Item>
                        </Timeline>
                    </div>
                </Content>
            </Main>
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
        </div>
    )
}
