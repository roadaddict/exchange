import styled, { injectGlobal } from "styled-components";

export const Main = styled.div`
  position: absolute;
  width: 400px;
  left: 50%;
  margin-left: -201px;
  top: 50%;
  margin-top: -201px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  background: #3683fb;
  color: white;
`;

export const Separator = styled.div`
  height: 125px;
  > div {
    display: inline-block;
    width: 50%;
    vertical-align: top;
  }
`;

export const CurrencyLarge = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 40px;
`;

export const CurrencyInput = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid #eee;
  line-height: 40px;
  font-size: 40px;
  margin-top: 20px;
  width: 100%;
  color: white;
`;
export const CurrencyTo = styled.div`
  background: #2365d2;
`;
export const Button = styled.button`
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  display: block;
  cursor: pointer;
  background: green;
  border: none;
  color: white; 
  width: 100%;
  background: #18ab18;
  opacity: ${props => (props.isAvailable ? 0.9 : 0.2)}
  pointer-events: ${props => (props.isAvailable ? "all" : "none")}
  
  :hover {
    opacity: 1
  }
`;

injectGlobal([
  `
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-decoration: none;
    font-weight: normal;
    outline: none;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #fff;
  }
  
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`
]);
