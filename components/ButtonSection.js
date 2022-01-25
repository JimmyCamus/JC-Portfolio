import Button from "./Button";
import StyledContainer from "./styled/StyledContainer";

const ButtonSection = ({ theme, firstButton, secondButton }) => {
  return (
    <div>
      <StyledContainer flexDirection="row">
        <Button
          primaryColor={theme.primaryColor}
          textColor={theme.textColor}
          text={firstButton.text}
          href={firstButton.href}
          target={firstButton.target}
        />
        <Button
          primaryColor={theme.backgroundColor}
          textColor={theme.primaryColor}
          borderColor={theme.primaryColor}
          text={secondButton.text}
          href={secondButton.href}
          target={secondButton.target}
        />
      </StyledContainer>
    </div>
  );
};

export default ButtonSection;
