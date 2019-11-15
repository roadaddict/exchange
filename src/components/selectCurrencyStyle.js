import styled from "styled-components";

export const SelectCurrencyComponent = styled.div`
  text-align: center;
  line-height: 20px;
  padding-top: 10px;
`;

export const Currency = styled.div`
  display: inline-block;
  font-size: 10px;
  padding: 0px 4px;
  cursor: pointer;
  border-radius: 5px;
  background:  ${props => (props.selected ? "#fff" : "none")}
  color:  ${props => (props.selected ? "#2265d2;" : "#fff")}
  font-weight: ${props => (props.selected ? "bold" : "normal")};
`;
