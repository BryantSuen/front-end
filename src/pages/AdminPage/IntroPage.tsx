import React, { useEffect, useState } from "react";
import { Breadcrumb, Input, Button, Form, Row, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import axios from "axios";

const { confirm } = Modal;

const IntroPage: React.FC = () => {
  interface FormData {
    content: string;
  }
  const [introForm] = Form.useForm<FormData>();
  const [preview, setPreview] = useState(false);

  const onFormFinish = (values: FormData) => {
    confirm({
      title: "Do you Want to Updata the introductions?",
      icon: <ExclamationCircleOutlined />,
      onOk: async () => {
        try {
          await axios.put(`/about`, {
            content: values.content,
          });
          message.success("publish success");
        } catch (err) {
          message.error("publish failed");
          console.log(err);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("/about");
        const about = result.data;
        introForm.setFieldsValue({
          content: about.content,
        });
      } catch (err) {
        message.error("failed in loading");
      }
    })();
  }, [introForm]);

  return (
    <div style={{ height: "100%" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Admin</Breadcrumb.Item>
        <Breadcrumb.Item>Intro</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="introContainer"
        style={{
          padding: 24,
          margin: 20,
          height: "100%",
          minHeight: "80vh",
          background: "#fff",
          borderRadius: "0.5%",
        }}
      >
        <h1>Introduction</h1>
        <Form
          form={introForm}
          layout="vertical"
          autoComplete="off"
          onFinish={onFormFinish}
        >
          <Form.Item
            name="content"
            label="Update Introduction (markdown format)"
          >
            <Input.TextArea rows={12} placeholder="Input content" />
          </Form.Item>

          <Row>
            <Button type="primary" htmlType="submit" style={{ margin: "10px" }}>
              Publish
            </Button>
            <Button
              type="primary"
              htmlType="button"
              style={{ margin: "10px" }}
              onClick={() => setPreview(true)}
            >
              Preview
            </Button>
            <Button
              htmlType="button"
              style={{ margin: "10px" }}
              onClick={() => introForm.resetFields()}
            >
              Reset
            </Button>
          </Row>
        </Form>

        <Modal
          title="Preview"
          visible={preview}
          onOk={() => setPreview(!preview)}
          onCancel={() => setPreview(false)}
          width={"900px"}
        >
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {introForm.getFieldValue("content")}
          </ReactMarkdown>
        </Modal>
      </div>
    </div>
  );
};

export default IntroPage;
