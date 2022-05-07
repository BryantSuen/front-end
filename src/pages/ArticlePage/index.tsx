import React, { useState } from "react";
import styles from "./index.module.css";
import { Row, Col, Avatar, Divider, Modal, Button } from "antd";
import {
  GithubOutlined,
  WechatOutlined,
  MailOutlined,
} from "@ant-design/icons";
import AvatarImage from "../../Assets/Images/pig.jpeg";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";

const ArticlePage: React.FC = () => {
  const [wx, setWx] = useState(false);
  const handleWechat = () => setWx(true);
  const handleCloseWechat = () => setWx(false);

  return (
    <div className={styles.page}>
      {/* <div className={styles.content}> */}
      <Row justify="center" align="top">
        <Col
          className={styles.left_text}
          xs={20}
          sm={20}
          md={16}
          lg={14}
          xl={14}
        >
          <div>
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/:id" element={<ArticleDetail />} />
            </Routes>
          </div>
        </Col>
        <Col className={styles.right_card} xs={0} sm={0} md={0} lg={4} xl={4}>
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
              <a href="https://github.com/BryantSuen" style={{ color: "#000" }}>
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
  );
};

export default ArticlePage;
