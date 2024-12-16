export const Button = ({ children, ...props }) => {
  return (
    <button style={{ width: "100px", height: "42px" }} {...props}>
      {children}
    </button>
  );
};
