import React from 'react'

function Header() {
	return (

        <div className="contenedor-presentacion">
            <div className="nav">
                <div className="contenedor-titulo">
                    <h1 className="titulo">Logo</h1>
                </div>
                <div className="redes-sociales">
                    <a href="#" className="facebook"><span className="fab fa-facebook-f" /></a>
                    <a href="#" className="instagram"><span className="fab fa-instagram" /></a>
                    <a href="#" className="youtube"><span className="fab fa-youtube" /></a>
                </div>  
            </div>
            <div className="titulo-web">
                <h2 className="titulo">El secreto de tu cocina</h2>
            </div>
            <div className="imagen-titulo-web" />
            <div className="difuminado" />
        </div>
	)
}
export default Header