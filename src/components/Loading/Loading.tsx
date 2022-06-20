import './style.css'

export const Loading = () => {
    // se crea un componente visual el cual solo se encargara de mostrar
    // una animacion de carga mientras estemos esperando el resultado de un llamado
    // de un endpoint
    return (
        <div className="lds-ring" ><div></div><div></div><div></div><div></div></div >
    )
}
