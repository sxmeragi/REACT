import styles from "./Feed.module.css";

export const Post = ({ children, header, footer }) => {
  return (
    <>
      <div className={styles.Post}>
        <div>{header}</div>
        <div className={styles.PostContent}>{children}</div>
        <div className={styles.PostFooter}>{footer}</div>
      </div>
      <hr style={{ height: "1px", backgroundColor: "black" }} />
    </>
  );
};
