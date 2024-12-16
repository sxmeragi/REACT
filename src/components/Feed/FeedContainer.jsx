import React, { Children } from "react";
import styles from "../Feed/Feed.module.css";

export const FeedContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
