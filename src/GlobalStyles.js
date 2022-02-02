import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font: inherit;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  button {
    cursor: pointer;
  }
  a{
        text-decoration: none;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 30px;
    }
`;
