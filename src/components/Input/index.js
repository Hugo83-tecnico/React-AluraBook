import styled from 'styled-components';


const InputContainer = styled.input`
    width: 350px;
    font-size: 16px;
    background: transparent;
    padding: 8px 12px 4px;
    border: 1px solid #FFF;
    border-radius: 5px;
    box-shadow: 0px 2px 4px #2D2B2B9F inset;
    box-sizing: border-box;
    color: white;
    &::placeholder {
        color: #BFBFBF;
      }

`;

const Input = ({type, placeholder, onBlur})=>{
    return(
        <InputContainer type={type} placeholder={placeholder}  onBlur={onBlur}/>
    )
}

export default Input;