import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: 1700px){
        font-size: 75%;
    }
 }


body {
   background: linear-gradient(90deg, #032754 0%, #d2a5be 120%);
    font-family: 'Rambla', sans-serif;
    overflow-x: hidden;
}

.mainIcon {
    height: 55vh;
    border-radius: 20px;
}

button {
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
    padding: 1rem 5rem;
    margin: 4rem 2rem 2rem 0rem;
    border: 3px solid #FECEF6;
    border-radius: 30px;
    background: transparent;
    color: #FECEF6;
    transition: all 0.5s ease;
    font-family: 'Rambla', sans-serif;
    &:hover {
        background-color: #FECEF6;
        color: #263771;
    }
}
    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }

    h3 {
color: white;
    }

    h4 {
        font-size: 2rem;
        font-weight: bold;
        color: #FECEF6;
    }

    span {
        font-weight: bold;
        color: #FECEF6;
    }

    a {
        font-size: 1.1.rem;
    }
    
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    

    #Wheel {
        animation: Wheel 2s linear infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      
      @keyframes Wheel {
        from {
          transform: rotateZ(0deg);
        }
        to {
          transform: rotateZ(360deg);
        }
      }

`;

export default GlobalStyle;
