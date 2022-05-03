import React, { useState } from "react";
import styles from "./index.module.css";
import ReactMarkdown from "react-markdown";
import {
  Row,
  Col,
  Calendar,
  Avatar,
  Divider,
  Breadcrumb,
  Modal,
  Button,
} from "antd";
import {
  GithubOutlined,
  WechatOutlined,
  HomeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import AvatarImage from "../../Assets/Images/pig.jpeg";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  const [wx, setWx] = useState(false);
  const handleWechat = () => setWx(true);
  const handleCloseWechat = () => setWx(false);

  const text =
    "# About Me\n Hi, I'm Bryantsuen, undergraduate in Tsinghua University.\n\n Electronic Engineering Department\n\n Let's make EE hard Again!";
  return (
    <div>
      {/* <div className={styles.content}> */}
      <Row justify="center" align="top">
        <Col
          className={styles.left_text}
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
        >
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">
                  <HomeOutlined />
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/about">
                  <span>about</span>
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <ReactMarkdown>{text}</ReactMarkdown>
            <Divider />
            <div className={styles.calendar}>
              <Calendar fullscreen={false} />
            </div>
          </div>
        </Col>
        <Col className={styles.right_card} xs={0} sm={0} md={0} lg={5} xl={4}>
          <div className={styles.profile}>
            <Avatar src={AvatarImage} size={96} />
            <h2>BryantSuen</h2>
            <p>boring...</p>
            <a
              href="mailto:sbr19@mails.tsinghua.edu.cn"
              style={{ color: "#000" }}
            >
              <MailOutlined />
              sbr19@mails.tsinghua.edu.cn
            </a>
            <Divider />
            <span style={{ margin: "10px" }}>
              <a href="https://github.com/BryantSuen" style={{color:'#000'}}>
                <GithubOutlined />
              </a>
            </span>
            <span style={{ margin: "10px" }}>
              <WechatOutlined onClick={handleWechat} />
              <Modal
                visible={wx}
                onCancel={handleCloseWechat}
                footer={[
                  <Button type="primary" onClick={handleCloseWechat}>
                    Close
                  </Button>,
                ]}
              >
                <div style={{ textAlign: "center" }}>
                  <Avatar src={AvatarImage} shape="square" size={128} />
                </div>
              </Modal>
            </span>
            <Divider />
          </div>
        </Col>
      </Row>
    </div>
    // </div>
  );
};

export default AboutPage;
