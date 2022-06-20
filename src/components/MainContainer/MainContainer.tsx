import "./styles.css";

interface MainContainerProps {
  children: JSX.Element | JSX.Element[];
}
// este componente se encarga de recibir el cuerpo de la pagina y dar un orden
export const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="container">{children}</div>;
};
