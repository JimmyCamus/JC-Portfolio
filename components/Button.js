import StyledButton from "./styled/StyledButton";
import StyledP from "./styled/StyledP";
import Link from "next/link";

const Button = ({ primaryColor, textColor, borderColor, text, href, target }) => {
  return (
    <div>
      <Link href={href}>
        <a target={target}>
          <StyledButton
            background={primaryColor}
            color={textColor}
            hoverBackground={textColor}
            hoverColor={primaryColor}
            border={`1px solid ${borderColor}`}
            hoverBorderColor={primaryColor}
          >
            <StyledP>{text}</StyledP>
          </StyledButton>
        </a>
      </Link>
    </div>
  );
};

export default Button;
