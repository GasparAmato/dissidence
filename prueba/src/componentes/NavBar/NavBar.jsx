import React from "react"

const Navbar = (props) => {
    return (
        <nav>
            <h1>TIENDA {props.nombreDeLaTienda}</h1>
            <h2>{props.subtitulo}</h2>
            <ul>
                <li className="perro">categoria 1</li>
                <li>categoria 2</li>
                <li>categoria 3</li>
                <li>categoria 4</li>
            </ul>

            <button onClick={props.darBienvenida}>SALUDAME</button>
        </nav>

    )
};

export default Navbar;