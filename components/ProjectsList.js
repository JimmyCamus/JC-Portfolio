import Image from "next/image";
import StyledContainer from "./styled/StyledContainer";
import StyledCard from "./styled/StyledCard";
import StyledP from "./styled/StyledP";
import StyledH3 from "./styled/StyledH3";
import ButtonSection from "./ButtonSection";
import projects from "../lib/projects.json";

const ProjectsList = ({ theme }) => {
  return (
    <div>
      <StyledContainer flexDirection="row" width="100%">
        {projects.map((item) => (
          <StyledCard
            key={item.key}
            backgroundColor={theme.backgroundColor}
            rBorder={`1px solid ${theme.primaryColor}`}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
            margin="10px 0px"
            width="100%"
            rDisplay="flex"
            rFlexDirection="column"
            rAlignItems="center"
            rJustifyContent="center"
            rWidth="90vw"
            minHeight="630px"
            rMinHeight="500px"
          >
            <div>
              <Image alt={item.alt} src={item.image} width="700px" height="350px" />
            </div>
            <StyledContainer flexDirection="column" width="50%" rWidth="100%">
              <StyledH3 fontSize="35px" rFontSize="25px">{item.name}</StyledH3>
              <StyledP>{item.description}</StyledP>
              <StyledH3 fontSize="20px" color={theme.primaryColor}>Technologies</StyledH3>
              <StyledP>{item.technologies}</StyledP>
              <ButtonSection
                theme={theme}
                firstButton={{
                  text: "See demo",
                  href: item.href,
                  target: "_blank",
                }}
                secondButton={{
                  text: "GitHub",
                  href: item.github,
                  target: "_blank",
                }}
              />
            </StyledContainer>
          </StyledCard>
        ))}
      </StyledContainer>
    </div>
  );
};

export default ProjectsList;
