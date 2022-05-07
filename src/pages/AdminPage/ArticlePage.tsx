import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  List,
  Button,
  Divider,
  message,
  Modal,
  Input,
  Form,
  Row,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "antd/lib/form/Form";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const { confirm } = Modal;
interface Article {
  _id: string;
  title: string;
  description: string;
  updatedAt: Date;
  author: string;
  content: string;
}
const ArticlePage = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  // switch between edit and preview
  const [editVisible, setEditVisible] = useState(true);
  const [editArticleForm] = useForm();

  const handleEditArticle = (_id: string) => async () => {
    try {
      const res = await axios.get(`/articles/${_id}`);
      const article: Article = res.data;
      editArticleForm.setFieldsValue({
        _id: article._id,
        title: article.title,
        description: article.description,
        content: article.content,
      });
    } catch (err) {
      message.error("refill failed");
    }
    setEditModalVisible(true);
  };

  const handleUpdateArticle = (_id: string) => () => {
    confirm({
      title: "Do you Want to Update the article?",
      icon: <ExclamationCircleOutlined />,
      content: "This operation will overwrite the previous.",
      onOk: async () => {
        try {
          await axios.put(`/articles/${_id}`, {
            title: editArticleForm.getFieldValue("title"),
            description: editArticleForm.getFieldValue("description"),
            content: editArticleForm.getFieldValue("content"),
          });
          message.success("update success");
        } catch (err) {
          message.error("update failed");
          console.log(err);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const handleDeleteArticle = (_id: string, title: string) => () => {
    confirm({
      title: `Are you sure to delete ${title}?`,
      icon: <ExclamationCircleOutlined />,
      content: "This opeartion can not be restored!",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          message.warning("Deleting");
          await axios.delete(`/articles/${_id}`);
          message.success("Deleted");
          try {
            setLoading(true);
            const res = await axios.get("/articles");
            setArticleList(res.data);
            setLoading(false);
          } catch (err) {
            setLoading(false)
            message.error("failed in loading");
            console.log(err);
          }
        } catch (err) {
          message.error("Delete failed");
          console.log(err);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(false);
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
          dataSource={articleList}
          loading={loading}
          pagination={{
            pageSize: 6,
          }}
          renderItem={(item: Article) => (
            <List.Item>
              <List.Item.Meta
                title={<Link to={`/articles/${item._id}`}>{item.title}</Link>}
                description={item.description}
              />
              <Button
                type="primary"
                style={{ margin: "5px" }}
                onClick={handleEditArticle(item._id)}
              >
                edit
              </Button>
              <Button
                danger
                style={{ margin: "5px" }}
                onClick={handleDeleteArticle(item._id, item.title)}
              >
                delete
              </Button>
            </List.Item>
          )}
        />
        <Modal
          title="Edit"
          visible={editModalVisible}
          okText="Save"
          cancelText="cancel"
          onOk={handleUpdateArticle(editArticleForm.getFieldValue("_id"))}
          onCancel={() => {
            setEditModalVisible(false);
          }}
        >
          {editVisible ? (
            <Form
              form={editArticleForm}
              layout="vertical"
              autoComplete="off"
              onFinish={() => {}}
            >
              <Form.Item name="title" label="Title">
                <Input placeholder="Input title" />
              </Form.Item>

              <Form.Item name="description" label="Description">
                <Input.TextArea rows={2} placeholder="Input description" />
              </Form.Item>

              <Form.Item name="content" label="Content (markdown format)">
                <Input.TextArea rows={8} placeholder="Input content" />
              </Form.Item>
            </Form>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {"# " +
                editArticleForm.getFieldValue("title") +
                "\n" +
                editArticleForm.getFieldValue("content")}
            </ReactMarkdown>
          )}
          <Row>
            <Button
              type="primary"
              htmlType="button"
              style={{ margin: "10px", width: "80px" }}
              onClick={() => {
                setEditVisible(!editVisible);
              }}
            >
              {editVisible ? "Preview" : "Edit"}
            </Button>
            <Button
              htmlType="button"
              style={{ margin: "10px" }}
              onClick={() => {
                editArticleForm.resetFields();
              }}
            >
              Reset
            </Button>
          </Row>
        </Modal>
      </div>
    </div>
  );
};

export default ArticlePage;
