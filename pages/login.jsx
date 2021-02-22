import * as React from "react";
import Router from 'next/router'
import 'antd/dist/antd.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
    Row,
    Col,
    Typography,
    Form,
    Input,
    Button,
    Checkbox,
} from "antd";
import AuthenticationService from "../module/auth/AuthenticationService";

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

const Login = (c) => {
    const [form] = Form.useForm();
    const [email, password] = React.useState('');

    let validate = {
        checked: false
    }

    const onFinish = (value) => {
        const auth = new AuthenticationService();

        console.log('value::', value);

        auth
            .postJwtAuthentication(value.email, value.password)
            .then((response) => {
                auth.registerSuccessFullLoginForJwt(email, response.data.token)
                console.log('success');

            }).catch((error) => {
                validate.checked = true;
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
                                {required: true, message: '패스워드를 입력해 주세요.'},
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
