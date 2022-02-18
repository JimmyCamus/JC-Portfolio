import StyledNavbar from "./styled/StyledNavbar";
import Logo from "./Logo";
import ButtonSection from "./ButtonSection";

const Navbar = ({ theme, firstButton, secondButton }) => {
  return (
    <div>
      <StyledNavbar backgroundColor={theme.backgroundColor}>
        <div>
          <Logo theme={theme} />
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
