import { useState } from "react";
import { Button } from "./components/Button";
import { Post } from "./components/Post";
import "./components/style.css";
export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Default",
      title: "Default post",
      isEdited: false,
    },
  ]);

  const [formValues, setFormValues] = useState({
    title: "Default post",
    content: "Default",
  });

  return (
    <div className="container123">
      <div>
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
        <button
          onClick={() => {
            setPosts((prev) => {
              const newId = prev.length + 1;
              return [...prev, { id: newId, ...formValues }];
            });
          }}
        >
          Add
        </button>
      </div>

      {posts.map((post, idx) => (
        <Post
          key={post.id}
          header={post.title}
          footer={
            <div>
              <Button>💘Like</Button>
              <Button>💔Dislike</Button>
            </div>
          }
        >
          <button
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
          </button>
          {post.content}
        </Post>
      ))}
    </div>
  );
}
