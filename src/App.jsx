import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import Profile from "./components/Profile/Profile";
import FeedContainer from "./components/Post/FeedContainer";
import store from "./components/Redux/store";
import Friends from "./components/Friends/Friends";

const { Content, Sider } = Layout;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <Layout style={{ minHeight: "100vh" }}>
          <Layout>
            <Sider width={450} style={{ background: "#fff" }}>
              <Profile />
              <div style={{ padding: "20px" }}>
                <Link to="/feed">
                  <p>Feed</p>
                </Link>
                <Link to="/friends">
                  <p>Friends</p>
                </Link>
              </div>
            </Sider>
            <Content style={{ padding: "0 24px", background: "#fff" }}>
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/feed" element={<FeedContainer />} />
                <Route path="/friends" element={<Friends />} />{" "}
                <Route path="/" element={<FeedContainer />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
