import React from "react";
import { Avatar, Typography, Button } from "antd";
import AvatarImg from "../../Assets/Images/pig.jpeg";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const { Title} = Typography;

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.center}>
        <div className={styles.board} />

        <div className={styles.avatar}>
          <Avatar src={AvatarImg} size={256} />
        </div>

        <div className={styles.text}>
          <Title level={1} style={{ color: "#ffffff" }}>
            Hello! Welcome to my website.
            <Link to={"/about"} style={{ textDecoration: "underline" }}>
              About Me
            </Link>
          </Title>
        </div>

        <div>
          <a href="https://github.bryantsuen.com" style={{ margin: "0 20px" }}>
            <Button size="large" shape="round">
              git
            </Button>
          </a>

          <a href="overleaf.bryantsuen.com" style={{ margin: "0 20px" }}>
            <Button size="large" shape="round">
              overleaf
            </Button>
          </a>

          <Link to="/articles" style={{ margin: "0 20px" }}>
            <Button size="large" shape="round">
              articles
            </Button>
          </Link>
        </div>
      </div>


      {/* <div className={styles.footer}>
        <Paragraph>备案</Paragraph>
      </div> */}
    </div>
  );
};

export default HomePage;
