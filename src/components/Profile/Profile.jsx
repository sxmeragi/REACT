import React, { useState } from "react";
import { Form, Input, Button, Typography, Space, Avatar } from "antd";
import { setUser, updateStatus } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.css";

const { Title, Text } = Typography;

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [profileName, setProfileName] = useState(user.name);
  const [profileStatus, setProfileStatus] = useState(user.status);
  const [bDay, setProfileBDay] = useState(user.bDay || "1/12/2025");
  const [city, setProfileCity] = useState(user.city || "City");
  const [profilePicture, setProfilePicture] = useState(
    user.profilePicture || null
  );

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = () => {
    dispatch(
      setUser({
        name: profileName,
        status: profileStatus,
        bDay,
        city,
        profilePicture,
      })
    );
    setIsEdit(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Space style={{ width: "100%" }}>
      {isEdit ? (
        <Form layout="vertical">
          <Form.Item label="Profile Picture">
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {profilePicture && (
              <Avatar
                size={100}
                src={profilePicture}
                style={{ marginTop: 10 }}
              />
            )}
          </Form.Item>
          <Form.Item label="Profile Name">
            <Input
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Profile Status">
            <Input
              value={profileStatus}
              onChange={(e) => setProfileStatus(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Birthday">
            <Input
              value={bDay}
              onChange={(e) => setProfileBDay(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="City">
            <Input
              value={city}
              onChange={(e) => setProfileCity(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSave}>
              Save
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Space size={"large"}>
          <div className={styles.Avatar}>
            <Avatar shape="square" size={200} src={profilePicture} />
            <Button
              type="primary"
              onClick={handleEditToggle}
              style={{ width: "200px" }}
            >
              Edit
            </Button>
          </div>
          <div className={styles.ProfileText}>
            <Title level={4}>Profile Information</Title>
            <Text strong>Profile Name:</Text> <Text>{profileName}</Text>
            <br />
            <Text strong>Profile Status:</Text> <Text>{profileStatus}</Text>
            <br />
            <Text strong>Birthday:</Text> <Text>{bDay}</Text>
            <br />
            <Text strong>City:</Text> <Text>{city}</Text>
          </div>
        </Space>
      )}
    </Space>
  );
};

export default Profile;
