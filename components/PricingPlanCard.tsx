import React, { useState } from "react";
import { Card, Divider, Button, Col, Row, Popover } from "antd";
import { CheckCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

const PricingPlanCard = ({ sideBarMenuKey }) => {
  const router = useRouter();

  const multiplyByTwo = (n: number) => {
    if (sideBarMenuKey === 1) {
      return n;
    }
    return n * 2;
  };

  const handleClick = (e) => {
    console.log(e);
  };
  const content = (
    <div style={{ color: "white" }}>
      <h4 style={{ color: "white" }}>Core HR</h4>
      <p>Minimize HR headaches so you can get back to businesses</p>
      <Button
        style={{ color: "white" }}
        icon={<CheckCircleOutlined />}
        type={"text"}
      >
        <span> Hiring and Onboarding</span>
      </Button>
      <br />
      <Button
        style={{ color: "white" }}
        icon={<CheckCircleOutlined />}
        type={"text"}
      >
        <span> Employee Database</span>
      </Button>
      <br />
      <Button
        style={{ color: "white" }}
        icon={<CheckCircleOutlined />}
        type={"text"}
      >
        <span> Document Management</span>
      </Button>
      <br />
      <Button
        style={{ color: "white" }}
        icon={<CheckCircleOutlined />}
        type={"text"}
      >
        <span> Reporting</span>
      </Button>
      <br />

      <Button
        style={{ color: "white" }}
        icon={<CheckCircleOutlined />}
        type={"text"}
      >
        <span> ALL FEATURES</span>
      </Button>
    </div>
  );
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            key={1}
            hoverable
            style={{ width: 300 }}
            className={styles.content}
          >
            <Title level={5}>Essential</Title>
            <p>
              Understand the true pulse of your organization with regular
              Check-ins and guided 1-on-1s, and show meaningful appreciation
              when it matters most using High Fives
            </p>
            <h3>
              {" "}
              {multiplyByTwo(Number(8))} € <span>per month per employee</span>
            </h3>
            <Divider />
            <br />
            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<CheckCircleOutlined />} type={"text"}>
                <span> Core HR</span>
              </Button>
            </Popover>
            <br />
            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<CheckCircleOutlined />} type={"text"}>
                <span> Core HR</span>
              </Button>
            </Popover>
            <br />
            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<CheckCircleOutlined />} type={"text"}>
                <span> Core HR</span>
              </Button>
            </Popover>
            <br />
            <br />
            <br />{" "}
            <Button
              type="primary"
              shape="round"
              size={"large"}
              block
              onClick={() => router.push("/signup")}
            >
              Select Plan
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            key={2}
            className={styles.content}
            bordered
            hoverable
            style={{ width: 300 }}
          >
            <Title level={5}>Growth</Title>

            <p style={{ color: "darkgray" }}>
              Understand the true pulse of your organization with regular
              Check-ins and guided 1-on-1s, and show meaningful appreciation
              when it matters most using High Fives
            </p>

            <h3>
              {multiplyByTwo(Number(14))}€ <span>per month per employee</span>
            </h3>
            <Divider />
            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<CheckCircleOutlined />} type={"text"}>
                <span> Core HR</span>
              </Button>
            </Popover>
            <br />
            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<CheckCircleOutlined />} type={"text"}>
                <span> Core HR</span>
              </Button>
            </Popover>
            <br />
            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<CheckCircleOutlined />} type={"text"}>
                <span> Core HR</span>
              </Button>
            </Popover>
            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<InfoCircleOutlined />} type={"text"}>
                {" "}
                <b>Performance Management</b>
              </Button>
            </Popover>

            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<InfoCircleOutlined />} type={"text"}>
                {" "}
                <b>Shift Planning</b>
              </Button>
            </Popover>

            <br />
            <br />
            <br />

            <Button
              type="primary"
              shape="round"
              size={"large"}
              block
              onClick={() => router.push("/signup")}
            >
              Select Plan
            </Button>
            <br />
            <br />
            <br />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            key={3}
            hoverable
            style={{ width: 300 }}
            className={styles.content}
          >
            <Title level={5}>Performance</Title>

            <p>
              Understand the true pulse of your organization with regular
              Check-ins and guided 1-on-1s, and show meaningful appreciation
              when it matters most using High Fives
            </p>

            <h3>
              {multiplyByTwo(Number(20))}€ <span>per month </span>
              <span>per employee</span>
            </h3>
            <Divider />
            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<CheckCircleOutlined />} type={"text"}>
                <span> Core HR</span>
              </Button>
            </Popover>
            <br />
            <Popover
              color={"darkBlue"}
              placement="topRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<CheckCircleOutlined />} type={"text"}>
                {" "}
                <span> Core HR</span>
              </Button>
            </Popover>
            <br />
            <Button icon={<CheckCircleOutlined />} type={"text"}>
              {" "}
              <span> Core HR</span>
            </Button>
            <Button icon={<InfoCircleOutlined />} type={"text"}>
              {" "}
              <b>Performance Management</b>
            </Button>
            <Popover
              color={"darkBlue"}
              placement="bottomRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<InfoCircleOutlined />} type={"text"}>
                {" "}
                <b>Shift Planning</b>
              </Button>
            </Popover>
            <Popover
              color={"darkBlue"}
              placement="bottomRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<InfoCircleOutlined />} type={"text"}>
                {" "}
                <b>Shift Planning</b>
              </Button>
            </Popover>

            <Popover
              color={"darkBlue"}
              placement="bottomRight"
              content={content}
              trigger="hover"
            >
              {" "}
              <Button icon={<InfoCircleOutlined />} type={"text"}>
                {" "}
                <b>Performance Management</b>
              </Button>
            </Popover>

            <Popover
              color={"darkBlue"}
              placement="bottomRight"
              content={content}
              trigger="hover"
            >
              <Button icon={<InfoCircleOutlined />} type={"text"}>
                {" "}
                <b>Shift Planning</b>
              </Button>
            </Popover>
            <br />
            <br />

            <Button
              type="primary"
              shape="round"
              size={"large"}
              block
              onClick={() => router.push("/signup")}
            >
              Select Plan
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PricingPlanCard;
