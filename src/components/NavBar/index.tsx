import React from "react";
import { Row, Col, Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, ExportOutlined } from "@ant-design/icons";
import "./index.css";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <Row justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="nav-logo">
            <Link to="/home">bs</Link>
          </span>
          <span className="nav-text">bryantsuen</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
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
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
