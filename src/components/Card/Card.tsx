import "./styles.css";

// se crea la interfaz de CardProps el cual nos sirve para declarar los tipos
// de las propiedades que recibiremos por propiedades

interface CardProps {
  children: JSX.Element | JSX.Element[];
  padding: string
}


// Creación de componente card el cual me permitira mostrar los otros componentes construidos
// ademas de que este tiene la capacidad de recibir la prop children el cual es para mostrar sus componentes hijos
// dentro de si mismo

export const Card = ({ children, padding }: CardProps) => {
  return <div className="cardContainer" style={{ padding: padding }}>{children}</div>;
};
