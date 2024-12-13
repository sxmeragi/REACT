

export const Post = ({ children, header, footer }) => {
  return (
    <div>
      <div>{header}</div>
      <div>{children}</div>
      {footer}
    </div>
  );
};
