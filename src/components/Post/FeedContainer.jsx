import React, { useState } from "react";
import { Input, Button, Card, Typography, Space } from "antd";
import { LikeOutlined, DislikeOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./Feed.module.css";

const { Title, Text } = Typography;

const FeedContainer = () => {
  const [formValues, setFormValues] = useState({ title: "", content: "" });
  const [posts, setPosts] = useState([]);

  return (
    <div className={styles.FeedContainer}>
      <Title level={3}>Create a Post</Title>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          placeholder="Post Title"
          value={formValues.title}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <Input
          placeholder="Post Content"
          value={formValues.content}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, content: e.target.value }))
          }
        />
        <Button
          type="primary"
          onClick={() => {
            setPosts((prev) => {
              const newId = prev.length + 1;
              return [...prev, { id: newId, ...formValues }];
            });
            setFormValues({ title: "", content: "" });
          }}
        >
          Add Post
        </Button>
      </Space>

      <div className={styles.PostList}>
        {posts.map((post, idx) => (
          <Card
            key={post.id}
            title={post.title}
            style={{ marginTop: 16 }}
            extra={
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setPosts((prev) => {
                    const newPosts = [...prev];
                    newPosts[idx] = {
                      ...newPosts[idx],
                      isEdited: !newPosts[idx].isEdited,
                      title: newPosts[idx].isEdited ? "Default" : "changed",
                      content: newPosts[idx].isEdited ? "Default" : "changed",
                    };
                    return newPosts;
                  });
                }}
              >
                Edit
              </Button>
            }
          >
            <Text>{post.content}</Text>
            <Space style={{ marginTop: 10 }}>
              <Button icon={<LikeOutlined />} />
              <Button icon={<DislikeOutlined />} />
            </Space>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeedContainer;
