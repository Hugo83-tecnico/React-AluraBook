import Logo from "../Logo";
import perfil from '../../assets/images/perfil.svg';
import sacola from '../../assets/images/sacola.svg';
import OpcoesHeader from '../OpcoesHeader';
import OpcoesHeaderIcone from '../OpcoesHeaderComIcone';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const HeaderContainer = styled.header`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #fff;

`;

const Header = ({image, alt, firstTitle, secondTitle})=>{


    const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
    const iconesOpcoes = [perfil, sacola];
    const caminhos = ['/categorias','/minhaEstante','/favoritos' ];

    return(
        <HeaderContainer>
            <Link to='/' style={{textDecoration: 'none'}}>
                <Logo image={image} alt={alt} firstTitle={firstTitle} secondTitle={secondTitle}/>
            </Link>
            <OpcoesHeader lista={textoOpcoes} links={caminhos}/>
            <OpcoesHeaderIcone lista={iconesOpcoes}/>
        </HeaderContainer>

    )
}

export default Header;