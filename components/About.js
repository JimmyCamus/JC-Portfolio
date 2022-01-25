import StyledCard from "./styled/StyledCard";
import StyledContainer from "./styled/StyledContainer";
import StyledP from "./styled/StyledP";
import StyledH1 from "./styled/StyledH1";
import StyledH3 from "./styled/StyledH3";

const About = ({ theme }) => {
  return (
    <div id="about">
      <StyledContainer flexDirection="column">
        <StyledCard
          backgroundColor={theme.cardColor}
          width="50vw"
          rWidth="90vw"
        >
          <StyledH1 color={theme.textColor} fontSize="30px" rFontSize="20px">
            {"Hi, I'm Jeremy, nice to meet you"}.
          </StyledH1>
          <StyledP color={theme.textColor} fontSize="18px" rFontSize="14px">
            I am from Antofagasta, Chile. I entered the world of web development
            in 2018, the same year I entered the Universidad Catolica del Norte.
            My specialty is the backend development, but since I always like to
            go further, I am applying my new knowledge in frontend, since I am a
            fan of new technologies and learning.
          </StyledP>
        </StyledCard>
        <StyledContainer flexDirection="row" margin="50px 0px">
          <StyledCard
            backgroundColor={theme.backgroundColor}
            border={`1px solid ${theme.primaryColor}`}
            width="25vw"
            rWidth="45vw"
            margin=" 0 5vw"
            rMargin="0 2vw"
          >
            <StyledH1 color={theme.textColor} fontSize="30px" rFontSize="20px">
              {"Backend developer"}
            </StyledH1>
            <StyledP color={theme.textColor} fontSize="18px" rFontSize="14px">
              This is my main path, I have worked more as a backend developer
              and it is an area in which I feel very comfortable applying all
              the logic of the business.
            </StyledP>
            <StyledH3
              color={theme.primaryColor}
              fontSize="20px"
              rFontSize="16px"
            >
              The lenguages and technologies i use
            </StyledH3>
            <StyledP color={theme.textColor} fontSize="18px" rFontSize="14px">
              Python, PHP, NodeJS, Django, Laravel, SQL
            </StyledP>
          </StyledCard>
          <StyledCard
            backgroundColor={theme.backgroundColor}
            border={`1px solid ${theme.primaryColor}`}
            width="25vw"
            rWidth="45vw"
            margin="0 5vw"
            rMargin="0 2vw"
          >
            <StyledH1 color={theme.textColor} fontSize="30px" rFontSize="20px">
              {"Frontend developer"}
            </StyledH1>
            <StyledP color={theme.textColor} fontSize="18px" rFontSize="14px">
              I am getting into the whole world of frontend, which I love and I
              will continue learning new tools and technologies to increase and
              perfect my skills in this world.
            </StyledP>
            <StyledH3
              color={theme.primaryColor}
              fontSize="20px"
              rFontSize="16px"
            >
              The lenguages and technologies i use
            </StyledH3>
            <StyledP color={theme.textColor} fontSize="18px" rFontSize="14px">
              Html, CSS, JavaScript, ReactJS, NextJS
            </StyledP>
          </StyledCard>
        </StyledContainer>
      </StyledContainer>
    </div>
  );
};

export default About;
