import * as React from "react";
import 'antd/dist/antd.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
    Row,
    Col,
    Typography,
    Form,
    Input,
    Button,
    notification,
} from "antd";
import AuthenticationService from "../module/auth/AuthenticationService";
import Router from "next/router"

const { Title } = Typography;

const cardStyle = {
}

const loginBodyStyle = {
    height: "100%",
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const failedLogin = placement => {
    notification.error({
        message: '로그인 할 수 없습니다.',
        description: '등록된 아이디, 또는 패스워드를 확인 하십시오.',
        placement
    })
}

const Login = (c) => {
    const [form] = Form.useForm();

    let validate = {
        checked: true
    }

    const onFinish = async (value) => {
        const auth = new AuthenticationService();

        auth
            .postJwtAuthentication(value.email, value.password)
            .then((response) => {
                auth.registerSuccessFullLoginForJwt(value.email, response.data.data)
                Router.push('/');
            }).catch(() => {
                failedLogin('topRight');
        });
    }

    return (
        <>
            <Row justify="center" align="middle" style={loginBodyStyle}>
                <Col span={6}>
                    <Title>LOGIN</Title>
                    <p>❤ 👍 😉</p>
                </Col>
                <Col span={4} style={cardStyle}>
                    <Form
                        form={form}
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{required: true, message: '아이디를 입력해 주세요.'}]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                                placeholder="Username"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                /*{required: true, message: '패스워드를 입력해 주세요.'},*/
                                {required: validate.checked, message: '아이디/패스워드를 확인해 주세요.'}
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                로그인
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

            <style global jsx>{`
                  html,
                  body,
                  body > div:first-child,
                  div#__next,
                  div#__next > div {
                    height: 100%;
                  }
                `}</style>
        </>
    )
}

export default Login
