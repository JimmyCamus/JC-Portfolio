import styled from "styled-components";

const StyledCard = styled.div`
  padding: 10px 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  flex: ${(props) => props.flex};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};

  @media screen and (max-width: 1024px) {
    & {
      width: ${(props) => props.rWidth};
      height: ${(props) => props.rheight};
      min-height: ${(props) => props.rMinHeight};
      margin: ${(props) => props.rMargin};
      flex: ${(props) => props.rFlex};
      display: ${(props) => props.display};
      justify-content: ${(props) => props.rJustifyContent};
      align-items: ${(props) => props.rAlignItems};
      flex-direction: ${(props) => props.rFlexDirection};
      border: ${(props) => props.rBorder};
    }
  }
`;

export default StyledCard;
