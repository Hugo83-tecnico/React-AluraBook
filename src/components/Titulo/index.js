import styled from 'styled-components';

export const TituloH2 = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color:  ${props=> props.fundo || '#FFF'};
    color: ${props=> props.cor || '#000'}; 
    font-size: font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align:  ${props => props.alinhamento || 'center'};
    margin: 5px;

`;

export const TituloH3 = styled.h3`
    width: 100%;
    padding: 5px 0;
    color: ${props=> props.cor || '#000'};
    font-size: font-size: ${props => props.tamanhoFonte || '14px;'};
    text-align:  ${props => props.alinhamento || 'center'};
    margin: 0;

`;

export const TituloH4 = styled.h4`
    width: 100%;
    padding: 5px 0;
    color: ${props=> props.cor || '#000'};
    font-size: font-size: ${props => props.tamanhoFonte || '12px;'};
    text-align:  ${props => props.alinhamento || 'center'};
    margin: 0;

`;

