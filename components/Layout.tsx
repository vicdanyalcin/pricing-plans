import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

import React from "react";

const Index = ({ children }) => {
  return <Layout className="layout">{children}</Layout>;
};

export default Index;
