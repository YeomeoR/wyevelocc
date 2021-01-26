import styled from 'styled-components';
import {motion} from 'framer-motion'
// styled components
export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }

`;

export const StyledMainIcon = styled.div`
  flex: 1;
  padding-right: 3rem;
  border-radius: 20px;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    display: block;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    border-radius: 20px;
    height: 80vh;
    object-fit: cover;
  }
`;
export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
   h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px){
        padding: 0;
        display: block;
        button {
          margin: 2rem 0rem 5rem 0rem;
        }
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
