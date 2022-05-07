import React from "react";
import styles from "./index.module.css";
import { Card, Avatar, Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import AvatarImg from "../../Assets/Images/pig.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "antd/lib/form/Form";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const handleLogin = async (value: any) => {
    console.log(process.env.NODE_ENV);
    console.log("Trigger login");
    try {
      const body = { userName: value.username, password: value.password };
      const response = await axios.post("/users/login", body);

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        message.success("login success");
        navigate("/admin");
      } else {
        console.log("error!");
        form.resetFields();
        message.error("login failed");
      }
    } catch (err) {
      console.log(err);
      form.resetFields();
      message.error("login failed");
    }
  };
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
            form={form}
            onFinish={handleLogin}
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
