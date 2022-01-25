import StyledContainer from "./styled/StyledContainer";
import StyledH3 from "./styled/StyledH3";
import StyledH1 from "./styled/StyledH1";

const Hero = ({ theme }) => {
  return (
    <div>
      <StyledContainer
        margin="0"
        height="100vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="250px"
      >
        <StyledH1 color={theme.textColor} fontSize="90px" rFontSize="40px">
          {"< Hello World />"}
        </StyledH1>
        <StyledH3 color={theme.secondaryColor} fontSize="25px" rFontSize="12px">
          {"I'm Jeremy a web developer and university student"}
        </StyledH3>
      </StyledContainer>
    </div>
  );
};

export default Hero;
