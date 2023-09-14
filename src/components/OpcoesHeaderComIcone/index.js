import styled from 'styled-components';

const ListaContainer = styled.ul`
    display: flex;
    gap:25px;
    margin-right: 10px;
`;


const OpcoesHeaderIcone = ({lista})=>{
    return (
        <ListaContainer>
            {lista.map((opcao,index)=>(<li key={index}><img src={opcao} alt='imagem icone'></img></li>))}
        </ListaContainer>
    )
}

export default OpcoesHeaderIcone;