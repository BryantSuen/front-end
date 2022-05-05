import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import PublishPage from "./PublishPage";
import IntroPage from "./IntroPage";

const { Sider } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const AdminPage: React.FC = () => {
  const location = useLocation();
  const siderLabel = location.pathname.split("/")[2];

  return (
    <Layout className={styles.bg}>
      <Sider width={200} className={styles.sider}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[siderLabel]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="articles">articles</Menu.Item>
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
          <Route path="/publish" element={<PublishPage />} />
          <Route path="/intro" element={<IntroPage />} />
        </Routes>
      </div>
    </Layout>
  );
};

export default AdminPage;
