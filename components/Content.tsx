import React, { useState } from "react";
import { Layout, Row, Col, Menu } from "antd";
import { Typography } from "antd";
import PricingPlanCard from "./PricingPlanCard";

const { Content } = Layout;
const { Title } = Typography;
const Index = () => {
  const [sideBarMenuKey, setSideBarMenuKey] = useState(1);

  return (
    <div>
      <Content style={{ padding: "0 50px" }}>
        <Row justify={"center"}>
          <Col>
            {" "}
            <Title level={3} style={{ textAlign: "center" }}>
              Base Plans
            </Title>
            <Menu
              style={{ margin: "16px 0", backgroundColor: "#F0F2F5" }}
              defaultSelectedKeys={["1"]}
              mode="horizontal"
            >
              <Menu.Item
                key={1}
                onClick={() => {
                  setSideBarMenuKey(1);
                }}
              >
                Navigation One
              </Menu.Item>
              <Menu.Item
                key={2}
                onClick={() => {
                  setSideBarMenuKey(2);
                }}
              >
                Navigation Two
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        <PricingPlanCard sideBarMenuKey={sideBarMenuKey} />
      </Content>
    </div>
  );
};

export default Index;
