import styled from 'styled-components';
import { useEffect, useState } from "react";
import { getFavoritos, deleteFavoritos } from "../../servicos/servicosRequisicoesFavoritos";


const FavoritosContainer = styled.div`
    width: auto;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    color: white;
  
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
    padding: 10px;
    
`;

const Titulo = styled.h2`
    color: white;
    padding: 20px 0 0 20px;

`;

const CardFavoritos = styled.div`
    width: 200px;
    height: 250px;
    cursor: pointer;
    border: 1px solid white;
    transition: box-shadow 2s;

    &:hover {
        box-shadow: 12px 12px 2px 1px rgba(255, 255, 255, .5);
    }
`;

const Favoritos = ()=>{

    const [favoritos,setFavoritos]=useState([]);

    useEffect(()=>{
        fetchFavoritos();
    },[favoritos]);


    const fetchFavoritos = async()=>{
        const recebe = await getFavoritos();
        setFavoritos(recebe);
    }

    const deletaFavorito = (id)=>{
        deleteFavoritos(id);
        alert("Item favorito deletado");
    }

    
    return (
       
        <FavoritosContainer> 
           
            <Titulo>Minha Coleção Favorita</Titulo>
         
           
            <CardContainer>
                {favoritos.map((item, index)=> (
                    <CardFavoritos key={index} onClick={()=> deletaFavorito(item.id)}>
                        <p>{item.nome}</p>
                        <img src="" alt={item.nome}/>
                    </CardFavoritos>
                    
                ))}
            
            </CardContainer>
            
        </FavoritosContainer>
    )
}

export default Favoritos;


