import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    & {
      font-size: ${(props) => props.rFontSize};
    }
  }
`;

export default StyledH1;
