import React from "react";
import styles from "./index.module.css";
import { Card, Avatar, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import AvatarImg from "../../Assets/Images/pig.jpeg";

const LoginPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.Card}>
        <Card
          title="Login (only available for admin)"
          bordered={false}
          style={{ width: 400, textAlign: "center" }}
        >
          <Avatar src={AvatarImg} size={128} style={{ margin: "20px" }} />
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={() => {}}
            style={{ padding: "25px" }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
