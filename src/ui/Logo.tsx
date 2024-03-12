import styled from 'styled-components';
import logoLight from '../assets/images/logo-light.png';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Img src={logoLight} alt='Logo' />
    </StyledLogo>
  );
};

export default Logo;
