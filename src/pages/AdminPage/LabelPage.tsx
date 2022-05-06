import React, { useState } from "react";
import { Breadcrumb, Input, Tag, Form, Tooltip, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const LabelPage: React.FC = () => {
  interface FormData {
    intro: string;
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
        <Breadcrumb.Item>Label</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="labelContainer"
        style={{
          padding: 24,
          margin: 20,
          height: "100%",
          minHeight: "80vh",
          background: "#fff",
          borderRadius: "0.5%",
        }}
      >
        <h1>Manage Labels</h1>
      </div>
    </div>
  );
};

export default LabelPage;
