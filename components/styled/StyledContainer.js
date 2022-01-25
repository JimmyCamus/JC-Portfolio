import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => props.margin};
  padding-bottom: ${(props) => props.padding};
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  @media screen and (max-width: 768px) {
    & {
      width: ${(props) => props.rWidth};
    }
  }
`;

export default StyledContainer;
