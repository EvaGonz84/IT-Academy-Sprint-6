import styled from "styled-components";

const desktopStartWidth = 996;

const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Rectangulo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 20px;
  padding: 15px;
  border: 1.5px solid;
  border-radius: 40px;
  font-size: 18px;
  background-color: ${({ isClick }) =>
    isClick ? "pink" : "rgba(255,255,255,0.7)"};
`;

export const Button = styled.button`
  margin: 2%;
  padding: 2% 20%;
  font-size: 20px;
  ${mobile} {
		width:95%;
	}
`;

export const Start = styled.div`
  height: 500px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
