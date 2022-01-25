import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 3px;
  border: none;
  margin: 20px;
  padding: 2px 25px;
  transition: all 0.3s ease;
  font-size: 16px;
  width: 140px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: ${(props) => props.border};

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    background: ${(props) => props.hoverBackground};
    color: ${(props) => props.hoverColor};
    border: ${(props) => props.hoverBorder};
  }

  @media screen and (max-width: 768px) {
    & {
      width: 110px;
      font-size: 10px;
    }
  }

  @media screen and (max-width: 320px) {
    & {
      width: 95px;
      font-size: 8px;
    }
  }

  @media screen and (max-width: 280px) {
    & {
      width: 75px;
      font-size: 8px;
    }
  }
`;

export default StyledButton;