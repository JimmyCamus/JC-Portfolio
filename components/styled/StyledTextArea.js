import styled from "styled-components";

const StyledTextArea = styled.textarea`
  padding: 10px 15px;
  background: transparent;
  border-radius: 5px;
  margin: 10px;
  width: 620px;
  height: 300px;
  font-size: 18px;
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.fBorderColor};
    box-shadow: 0 0 10px #658DB8;
  }

  &:hover {
    border: 1px solid ${(props) => props.fBorderColor};
    box-shadow: 0 0 10px #658DB8;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 300px;
    }
  }

  @media screen and (max-width: 300px) {
    & {
      width: 250px;
    }
  }
`;

export default StyledTextArea ;
