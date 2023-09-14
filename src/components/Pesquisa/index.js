import styled from 'styled-components';
import Input from '../Input';
import { useEffect, useState } from 'react';

import { getLivros } from '../../servicos/servicosRequisicoesLivros';
import { postFavoritos } from '../../servicos/servicosRequisicoesFavoritos';


const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    height: auto;
    width: 100%;
    margin-bottom: 250px;

`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;

`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const RenderizaLivro = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;

const EstanteLivros = styled.div`
    width: 400px;
    height: auto;
    margin: 30px;
    border: 1px solid white;
    border-radius: 15px;
    transition: box-shadow 2s;
    cursor: pointer;

    &:hover {
        box-shadow: 12px 12px 2px 1px rgba(255, 255, 255, .15);
    }
`;

//Input podemos usar onChange(o trigger é quando a tecla é solta) ou onBlur(o trigger quando clicar fora)

const Pesquisa = ()=>{

    const [livroPesquisado, setlivroPesquisado] = useState([]); //Necessario iniciar com valor a variavel "livroPesquisado" 
                                                                //Pode ser string vazia, number ou []   
    const [livros, setLivros] = useState([]);

   
    useEffect(()=>{
        fetchLivros();

    },[]);

    const fetchLivros = async()=> {
        const recebeLivros = await getLivros();
        setLivros(recebeLivros);
    }

    const inserirLivro = async (id)=>{
        await postFavoritos(id);
        alert("Livro Inserido");
    }

    return(
        <PesquisaContainer>
            <Titulo>Já Sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                type='text' 
                placeholder='Escreva sua próxima leitura'
                onBlur={(event)=>{
                    const input = event.target.value;
                    const resultado = livros.filter(value => value.nome.includes(input))
                    setlivroPesquisado(resultado);
                }}
            />
            <RenderizaLivro>
                {livroPesquisado.map((item, index)=>(
                    <EstanteLivros key={index} onClick={()=> inserirLivro(item.id)}>
                        <p>{item.nome}</p>
                        <img src={item.src} alt={item.nome}/>
                        
                    </EstanteLivros>
                ))}
            </RenderizaLivro>
        </PesquisaContainer>
    )
};

export default Pesquisa;