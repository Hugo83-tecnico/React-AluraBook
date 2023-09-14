import styled from 'styled-components';
import { TituloH2 } from '../Titulo';
import { dbUltimosLancamentos } from './DBUltimos';
import CardRecomenda from '../CardRecomenda';
import fotoLivro from '../../assets/images/livro2.png';


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const UltimosLancamentos = ()=>{
 
    return(
        <UltimosLancamentosContainer>
            <TituloH2
                 cor="#EB9B00"
                 tamanhoFonte="36px"
             >
                Últimos Lançamentos
             </TituloH2>
            <NovosLivrosContainer>
                {dbUltimosLancamentos.map((livro,index) =>(
                    <img key={index} src={livro.src} alt={livro.nome}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo='Talvez você se interesse por'
                subtitulo='Angular 11'
                descricao='Construindo aplicação com angular'
                imagem={fotoLivro}

            />
        </UltimosLancamentosContainer>


    )
}

export default UltimosLancamentos;