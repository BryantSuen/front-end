import React from "react";
import { Breadcrumb, List, Button, Divider } from "antd";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  const handleEditArticle = () => {};
  const handleDeleteArticle = () => {};
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
    <div style={{ height: "100%" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Admin</Breadcrumb.Item>
        <Breadcrumb.Item>Articles</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="articleContainer"
        style={{
          padding: 24,
          margin: 20,
          height: "100%",
          minHeight: "80vh",
          background: "#fff",
          borderRadius: "0.5%",
        }}
      >
        <h1>Articles</h1>
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={data}
          pagination={{
            pageSize: 6,
          }}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to={`/admin/articles/${item._id}`}>{item.title}</Link>
                }
                description={item.abstract}
              />
              <Button
                type="primary"
                style={{ margin: "5px" }}
                onClick={handleEditArticle}
              >
                edit
              </Button>
              <Button
                danger
                style={{ margin: "5px" }}
                onClick={handleDeleteArticle}
              >
                delete
              </Button>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ArticlePage;
