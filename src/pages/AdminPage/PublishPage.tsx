import React, { useState } from "react";
import { Breadcrumb, Input, Button, Form, Row, Modal } from "antd";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const PublishPage: React.FC = () => {
  interface FormData {
    title: string;
    content: string;
    lables: string;
  }
  const [form] = Form.useForm<FormData>();
  const [preview, setPreview] = useState(false);

  const onFormFinish = (values: FormData) => {
    console.log(values);
  };

  return (
    <div style={{ height: "100%" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Admin</Breadcrumb.Item>
        <Breadcrumb.Item>Publish</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="publishContainer"
        style={{
          padding: 24,
          margin: 20,
          height: "100%",
          minHeight: "80vh",
          background: "#fff",
          borderRadius: "0.5%",
        }}
      >
        <h1>Publish</h1>
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={onFormFinish}
        >
          <Form.Item name="title" label="Title">
            <Input placeholder="Input title" />
          </Form.Item>

          <Form.Item name="content" label="Content (markdown format)">
            <Input.TextArea rows={8} placeholder="Input content" />
          </Form.Item>

          <Form.Item name="labels" label="Labels">
            <Input placeholder="Input labels" />
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
              onClick={() => form.resetFields()}
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
            {"# " +
              form.getFieldValue("title") +
              "\n" +
              form.getFieldValue("content")}
          </ReactMarkdown>
        </Modal>
      </div>
    </div>
  );
};

export default PublishPage;
