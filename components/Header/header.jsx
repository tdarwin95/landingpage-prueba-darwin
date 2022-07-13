import React from 'react'
import Link from 'next/link'
import {useRef} from 'react'

function Header() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

	return (

        <div className="contenedor-presentacion">
            <header>

                <button className='nav-btn' onClick={showNavbar}><i class="fa fa-bars"></i></button>

                <nav ref={navRef} className="nav">

                    

                    <div className="contenedor-titulo">

                        <Link href={{ pathname: '/'}}>
                            <a href="#"><h1 className="titulo">Logo</h1></a>
                        </Link>
                        
                    </div>

                    <ul className="redes-sociales">
                        <li><a href="#" className="facebook"><span className="fab fa-facebook-f" /></a></li>
                        <li><a href="#" className="instagram"><span className="fab fa-instagram" /></a></li>
                        <li><a href="#" className="youtube"><span className="fab fa-youtube" /></a></li>
                    </ul>  

                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>x</button>

                </nav>

            </header>

            <section className="titulo-principal">
                <div className="titulo-web">
                    <h2 className="titulo">El secreto</h2>
                    <h2 className="titulo">de tu cocina</h2>
                </div>
                <div className="imagen-titulo-web" />
                <div className="difuminado" />
            </section>

        </div>
	)
}
export default Header