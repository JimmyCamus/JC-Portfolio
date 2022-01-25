import StyledNavbar from "./styled/StyledNavbar";
import StyledH1 from "./styled/StyledH1";
import ButtonSection from "./ButtonSection";

const Navbar = ({ theme, firstButton, secondButton }) => {
  return (
    <div>
      <StyledNavbar backgroundColor={theme.backgroundColor}>
        <div>
          <StyledH1 color={theme.textColor} fontSize="30px" rFontSize="30px">
            JC
          </StyledH1>
        </div>
        <div>
          <ButtonSection
            theme={theme}
            firstButton={firstButton}
            secondButton={secondButton}
          />
        </div>
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
