type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className="aa">{children}</h2>;
};
export default Title;