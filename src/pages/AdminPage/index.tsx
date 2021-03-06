import React from "react";
import { Layout, Menu } from "antd";
import { BookOutlined, EditOutlined, CoffeeOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import PublishPage from "./PublishPage";
import IntroPage from "./IntroPage";
import ArticlePage from "./ArticlePage";

const { Sider } = Layout;

const AdminPage: React.FC = () => {
  const location = useLocation();
  const siderLabel = location.pathname.split("/")[2];

  return (
    <Layout className={styles.bg}>
      <Sider width={180} className={styles.sider} theme="light">
        <Menu
          mode="inline"
          defaultSelectedKeys={["articles"]}
          selectedKeys={[siderLabel]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="articles">
            <Link to="/admin/articles">
              <BookOutlined />
              article
            </Link>
          </Menu.Item>
          <Menu.Item key="publish">
            <Link to="/admin/publish">
              <EditOutlined />
              publish
            </Link>
          </Menu.Item>
          <Menu.Item key="intro">
            <Link to="/admin/intro">
              <CoffeeOutlined />
              intro
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <div className={styles.innerCard}>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/articles" replace />} />
          <Route path="/publish" element={<PublishPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/articles" element={<ArticlePage />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default AdminPage;
