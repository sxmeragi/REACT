import React from "react";
import { Card, Avatar, Button, Col, Row } from "antd";
import { MehFilled, QqOutlined, UserOutlined } from "@ant-design/icons";

const friendsData = [
  { id: 1, name: "Nardo Wick", status: "Online", city: "New York" },
  { id: 2, name: "Denzel Curry", status: "Offline", city: "London" },
  { id: 3, name: "Earl Simmons", status: "Busy", city: "Paris" },
  { id: 4, name: "Paul Van Haver", status: "Online", city: "Paris" },
];

const Friends = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Friends List</h1>
      <Row gutter={[16, 16]}>
        {friendsData.map((friend) => (
          <Col span={6} key={friend.id}>
            <Card
              hoverable
              style={{
                width: 240,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Avatar
                size={128}
                icon={<MehFilled />}
                style={{
                  marginBottom: "29px",
                }}
              />
              <Card.Meta
                title={friend.name}
                description={
                  <>
                    <p>{friend.status}</p>
                    <p>{friend.city}</p>
                  </>
                }
              />
              <Button type="primary" block>
                View Profile
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Friends;
