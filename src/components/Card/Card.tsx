import "./styles.css";
interface CardProps {
  children: JSX.Element | JSX.Element[];
  padding: string
}

export const Card = ({ children, padding }: CardProps) => {
  return <div className="cardContainer" style={{ padding: padding }}>{children}</div>;
};
