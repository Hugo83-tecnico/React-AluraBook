import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListaContainer = styled.ul`
    display: flex;
    gap: 100px;

`;


const OpcoesHeader = ({lista,links})=>{

    return (
        <ListaContainer>
            {lista.map((item, index)=>(
                <Link to={links[index]} style={{textDecoration: 'none'}} key={index}><li>{item}</li></Link> 
            ))}
        </ListaContainer>
    )
}

export default OpcoesHeader;

