import { useState } from "react";
import { BrowserRouter, Link, useRoutes } from "react-router-dom";
import { Button } from "./components/Feed/Button";
import { Post } from "./components/Feed/Post";
import styles from "./components/Feed/Feed.module.css";
import { FeedContainer } from "./components/Feed/FeedContainer";
import Messages from "./components/Messages/Messages";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "default",
      title: "Default post",
      isEdited: false,
    },
  ]);

  const [formValues, setFormValues] = useState({
    title: "Default post",
    content: "Default",
  });

  function Routes() {
    return useRoutes([
      {
        path: "/",
        element: (
          <FeedContainer>
            <input
              type="text"
              value={formValues.title}
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <input
              type="text"
              value={formValues.content}
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, content: e.target.value }))
              }
            />
            <Button
              onClick={() => {
                setPosts((prev) => {
                  const newId = prev.length + 1;
                  return [...prev, { id: newId, ...formValues }];
                });
                setFormValues({ title: "", content: "" }); // Очистить форму после добавления
              }}
            >
              Add
            </Button>

            {posts.map((post, idx) => (
              <Post
                key={post.id}
                header={post.title}
                footer={
                  <div className={styles.PostFooter}>
                    <Button>💘</Button>
                    <Button>💔</Button>
                  </div>
                }
              >
                {post.content}
                <Button
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
              </Post>
            ))}
          </FeedContainer>
        ),
      },
      {
        path: "/messages",
        element: <Messages />,
      },
    ]);
  }

  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/messages">
          <p>Messages</p>
        </Link>
      </div>
      <Routes />
    </BrowserRouter>
  );
}
