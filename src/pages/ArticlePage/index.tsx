import React, { useState } from "react";
import styles from "./index.module.css";
import {
  Row,
  Col,
  Avatar,
  Divider,
  Breadcrumb,
  Modal,
  Button,
  Input,
  List,
} from "antd";
import {
  GithubOutlined,
  WechatOutlined,
  HomeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import AvatarImage from "../../Assets/Images/pig.jpeg";
import { Link } from "react-router-dom";

const { Search } = Input;

const ArticlePage: React.FC = () => {
  const [wx, setWx] = useState(false);
  const handleWechat = () => setWx(true);
  const handleCloseWechat = () => setWx(false);
  const data = [
    {
      title: "article1",
      author: "bryantsuen",
      time: "2022-5-4",
      abstract: "haha",
      _id: "123456",
    },
    {
      title: "article2",
      author: "bryantsuen",
      time: "2022-5-4",
      abstract: "haha",
      _id: "123457",
    },
    {
      title: "article3",
      author: "bryantsuen",
      time: "2022-5-4",
      abstract: "haha",
      _id: "123458",
    },
    {
      title: "article3",
      author: "bryantsuen",
      time: "2022-5-4",
      abstract: "haha",
      _id: "123458",
    },
    {
      title: "article3",
      author: "bryantsuen",
      time: "2022-5-4",
      abstract: "haha",
      _id: "123458",
    },
    {
      title: "article3",
      author: "bryantsuen",
      time: "2022-5-4",
      abstract: "haha",
      _id: "123458",
    },
    {
      title: "article3",
      author: "bryantsuen",
      time: "2022-5-4",
      abstract: "haha",
      _id: "123458",
    },
  ];

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
                <Link to="/articles">
                  <span>articles</span>
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ margin: "17px auto", width: "50%" }}>
              <Search placeholder="search articles" enterButton />
            </div>
            <List
              itemLayout="horizontal"
              dataSource={data}
              pagination={{
                pageSize: 6,
              }}
              size="large"
              renderItem={(item) => (
                <List.Item 
                actions={["修改","2022"]}>
                  <List.Item.Meta
                    title={
                      <Link to={`/articles/${item._id}`}>
                        {item.title}
                      </Link>
                    }
                    description={item.abstract}
                  />
                  <Button type="link" style={{ margin: "5px" }}>
                    view
                  </Button>
                </List.Item>
              )}
            />
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
