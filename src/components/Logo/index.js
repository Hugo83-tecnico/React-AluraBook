import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin-left: 10px;

`;

const Logo = ({image, alt, firstTitle, secondTitle})=>{

    return (
        <LogoContainer>
            <img style={{marginRight:'10px'}} src={image} alt={alt} className='logo-img'/>
            <p>
                <strong>
                    {firstTitle}
                </strong>{secondTitle}
            </p>
        </LogoContainer>
    )
}

export default Logo;