import React, { useState, useEffect } from "react";
import { Breadcrumb, message, Spin } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import axios from "axios";

const ArticleDetail: React.FC = () => {
  const _id = useParams().id;

  const [loading, setLoading] = useState(false);

  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/articles/${_id}`);
        setArticleTitle(res.data.title);
        setArticleContent(res.data.content);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        message.error("failed in loading");
        console.log(err);
      }
    })();
  }, [_id]);

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
        <Breadcrumb.Item>
          <Link to={`/articles/${_id}`}>
            <span>{articleTitle}</span>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ margin: "15px" }}>
        {loading ? (
          <div
            style={{
              textAlign: "center",
              padding: "30px 50px",
              margin: "20px",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {"# " + articleTitle + "\n" + articleContent}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
