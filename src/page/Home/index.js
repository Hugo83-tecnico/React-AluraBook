import styled from 'styled-components';
import Pesquisa from "../../components/Pesquisa";
import UltimosLancamentos from "../../components/UltimosLancamentos";


const HomeContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`;

const Home = ()=>{
    return (

        <HomeContainer> 
            <Pesquisa/>
            <UltimosLancamentos/>
        </HomeContainer>
    )
}

export default Home;