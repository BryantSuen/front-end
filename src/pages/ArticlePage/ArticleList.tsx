import React, { useEffect, useState } from "react";
import { Breadcrumb, Input, List, Button, message } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

const { Search } = Input;
const ArticleList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);

  interface Article {
    _id: string;
    title: string;
    description: string;
    updatedAt: Date;
    author: string;
    content: string;
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("/articles");
        setArticleList(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        message.error("failed in loading");
        console.log(err);
      }
    })();
  }, []);

  const handleSearch = (value: string) => {
    (async () => {
      try {
        setLoading(true);
        setSearchLoading(true);
        const res = await axios.get("/articles");
        const articleData = res.data.filter((item: Article) => {
          return item.title.includes(value) || item.description.includes(value);
        });

        setArticleList(articleData);
        setLoading(false);
        setSearchLoading(false);
      } catch (err) {
        setLoading(false);
        setSearchLoading(false);
        message.error("failed in loading");
        console.log(err);
      }
    })();
  };

  return (
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
        <Search
          placeholder="search articles"
          enterButton
          onSearch={handleSearch}
          loading={searchLoading}
        />
      </div>
      <List
        itemLayout="horizontal"
        dataSource={articleList}
        loading={loading}
        pagination={{
          pageSize: 6,
        }}
        size="large"
        renderItem={(item: Article) => (
          <List.Item
            actions={[
              "修改",
              `${dayjs(item.updatedAt).locale("zh-cn").year()}-${dayjs(
                item.updatedAt
              )
                .locale("zh-cn")
                .month()}-${dayjs(item.updatedAt).locale("zh-cn").date()}`,
            ]}
          >
            <List.Item.Meta
              title={<Link to={`/articles/${item._id}`}>{item.title}</Link>}
              description={item.description}
            />
            <Button type="link" style={{ margin: "5px" }}>
              <Link to={`/articles/${item._id}`}>view</Link>
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ArticleList;
