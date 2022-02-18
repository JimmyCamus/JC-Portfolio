import Link from "next/link";
import StyledH1 from "./styled/StyledH1";

const Logo = ({theme}) => {
  return (
    <Link href="/">
      <a>
        <StyledH1 color={theme.textColor} fontSize="30px" rFontSize="30px">
          JC
        </StyledH1>
      </a>
    </Link>
  );
};

export default Logo;
