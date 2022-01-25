import styled from "styled-components";

const StyledH3 = styled.h3`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    & {
      font-size: ${(props) => props.rFontSize};
    }
  }
`;

export default StyledH3;
