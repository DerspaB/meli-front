import "./styles.css";

interface MainContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="container">{children}</div>;
};
