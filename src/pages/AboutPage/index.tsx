import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  Avatar,
  Divider,
  Breadcrumb,
  Modal,
  Button,
  message,
} from "antd";
import {
  GithubOutlined,
  WechatOutlined,
  HomeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import AvatarImage from "../../Assets/Images/pig.jpeg";
import { Link } from "react-router-dom";
import CatImage from "../../Assets/Images/cat.jpg";

const AboutPage: React.FC = () => {
  const [wx, setWx] = useState(false);
  const [text, setText] = useState("");
  const handleWechat = () => setWx(true);
  const handleCloseWechat = () => setWx(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("/about");
        const about = result.data;
        setText(about.content);
      } catch (err) {
        message.error("failed in loading");
      }
    })();
  }, []);
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
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {text}
            </ReactMarkdown>
            <Divider />
            <Image src={CatImage} width={"80%"} />
            {/* <div className={styles.calendar}>
              <Calendar fullscreen={false} />
            </div> */}
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
    // </div>
  );
};

export default AboutPage;
