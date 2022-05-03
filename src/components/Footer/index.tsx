import React from "react";
import { Row, Col } from "antd";
import { MobileOutlined, MailOutlined } from "@ant-design/icons";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <Row justify="center">
        <Col span={24}>
          <p className="footer_note"> bryantsuen all rights reserved </p>
        </Col>
      </Row>
      <Row>
        <Col span={12} push={2}>
          <h2 className="footer_note">Techs</h2>
          <p className="footer_note">React</p>
          <p className="footer_note">Ant Design</p>
          <p className="footer_note">Express</p>
        </Col>
        <Col span={12} pull={2}>
          <h2 className="footer_note">Report Issues</h2>
          <p className="footer_note">
            <MobileOutlined />
            13717909688
          </p>
          <p className="footer_note">
            <a href="mailto:sbr19@mails.tsinghua.edu.cn" style={{color:'#fff'}}>
              <MailOutlined /> sbr19@mails.tsinghua.edu.cn
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
