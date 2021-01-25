import React from 'react';
import { ContainerNavbar, ContainerConteudoNavbar } from './style';
import Logo from '../../content/images/svg/logo.svg';

const navbar: React.FC = () => {
    return (
        <ContainerNavbar>
            <ContainerConteudoNavbar>
                <img src={Logo} alt="logo-empresa" />
                <nav>
                    <a href="/">Anexar</a>
                    <a href="/Importacao">Importações</a>
                </nav>
            </ContainerConteudoNavbar>
        </ContainerNavbar>
    );
}

export default navbar;