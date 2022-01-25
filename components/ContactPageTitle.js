import StyledContainer from "./styled/StyledContainer";
import StyledH1 from "./styled/StyledH1";

const ContactPageTitle = ({ theme }) => {
  return (
    <div>
      <StyledContainer height="30vh" padding="50px" margin="50px">
        <StyledH1
          color={theme.textColor}
          fontSize="80px"
          rFontSize="40px"
        >
          Contact Me
        </StyledH1>
      </StyledContainer>
    </div>
  );
};

export default ContactPageTitle;
