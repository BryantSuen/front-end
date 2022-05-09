import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const Icon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3386854_yv5y2cvcxr.js",
});
export const MinecraftOutlined = () => {
  return <Icon type="icon-minecraft" style={{ padding: "3px" }} />;
};
