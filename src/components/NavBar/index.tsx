import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Button, Modal, message, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  ExportOutlined,
  ExclamationCircleOutlined,
  LogoutOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import "./index.css";
import { getJwtPayload } from "../../utils/getJwtPayload";

const { confirm } = Modal;
const NavBar: React.FC = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    confirm({
      title: `Are you sure to log out?`,
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        localStorage.removeItem("token");
        setLogoutVisible(false);
        navigate("/login");
        message.success("logged out");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    const jwtPayload = getJwtPayload();
    if (jwtPayload) {
      setLogoutVisible(true);
    } else {
      setLogoutVisible(false);
    }
  }, []);
  return (
    <div className="navbar">
      <Row justify="center">
        <Col xs={20} sm={20} md={10} lg={12} xl={12}>
          <span className="nav-logo">
            <Link to="/home">
              <Avatar src={process.env.PUBLIC_URL + "/logo512.png"} />
            </Link>
          </span>
          <span className="nav-text">bryantsuen</span>
        </Col>
        <Col xs={0} sm={0} md={10} lg={8} xl={6} push={2}>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link to="/home">
                <HomeOutlined />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="git">
              <Link to="/git">
                <ExportOutlined />
                Git
              </Link>
            </Menu.Item>
            <Menu.Item key="overleaf">
              <Link to="/overleaf">
                <ExportOutlined />
                Overleaf
              </Link>
            </Menu.Item>
            {logoutVisible ? (
              <Menu.Item key="admin">
                <Link to="/admin">
                  <ControlOutlined />
                  Admin
                </Link>
              </Menu.Item>
            ) : null}
          </Menu>
        </Col>
        <Col span={3} push={2}>
          {logoutVisible ? (
            <Menu mode="horizontal">
              <Menu.Item key="logout">
                <Button type="link" onClick={handleLogout} size="small">
                  <LogoutOutlined />
                  log out
                </Button>
              </Menu.Item>
            </Menu>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
