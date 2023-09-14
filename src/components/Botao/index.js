import styled from 'styled-components';


const Button = styled.button`
    display: inline;
    width: 150px;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 2px 4px 4px #0000009F;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    margin-top: 10px;
    margin-bottom: 10px;
    transition-property: background-color, color;
    transition-duration: .15s;

    &:hover {
        background-color: #0069d9;
        border-color: #0062cc;
`;

const Botao = ({children, onClick, type})=> {   
    return(
        <Button type={type? type : "button"} onClick={onClick}>{ children }</Button>
    )
}

export default Botao;