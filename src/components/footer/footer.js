import React from "react";
import './styles.css'
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.jpg'

function Footer (){
    return(

        <footer>
            <img id='logo' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Lucas Gomes</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>

        </footer>
    )
}

export default Footer;