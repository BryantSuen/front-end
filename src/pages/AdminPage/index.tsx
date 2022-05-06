import React from "react";
import { Layout, Menu } from "antd";
import styles from "./index.module.css";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import PublishPage from "./PublishPage";
import IntroPage from "./IntroPage";
import ArticlePage from "./ArticlePage";
import LabelPage from "./LabelPage";

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
            <Link to="/admin/articles">article</Link>
          </Menu.Item>
          <Menu.Item key="label">
            <Link to="/admin/label">label</Link>
          </Menu.Item>
          <Menu.Item key="publish">
            <Link to="/admin/publish">publish</Link>
          </Menu.Item>
          <Menu.Item key="intro">
            <Link to="/admin/intro">intro</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <div className={styles.innerCard}>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/articles" replace />} />
          <Route path="/publish" element={<PublishPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/label" element={<LabelPage />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default AdminPage;
