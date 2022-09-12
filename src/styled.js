import styled from "styled-components";

export const Rectangulo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 20px;
  padding:15px;
  border:1.5px solid;
  border-radius: 40px;
  font-size: 18px;
  background-color: ${({ isClick }) => (isClick ? 'pink' : 'white')};
`;

export const Button = styled.button`
  padding: 20px 300px;
  font-size: 20px;
`;

