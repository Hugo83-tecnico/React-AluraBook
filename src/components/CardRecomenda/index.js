import { styled } from "styled-components";
import Botao from "../Botao";
import { TituloH3, TituloH4 } from "../Titulo";

const Card = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 600px;
    background-color: white;
    
`;

const SubCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 10px;

`;

const CardImg = styled.img`
    width: 150px;

`;


const CardRecomenda = ({titulo,subtitulo,descricao, imagem, altImagem, funcaoButton})=>{

    return(
        <Card>
            <div>
                <TituloH3 cor="#EB9B00">{titulo}</TituloH3>
                <TituloH4 cor="#EB9B00">{subtitulo}</TituloH4>
                <p>{descricao}</p>
               
            </div>
            <SubCard>
                <CardImg src={imagem} alt={altImagem}/>
                <Botao>Clique aqui</Botao>
            </SubCard>
           
        </Card>

    )
}

export default CardRecomenda;