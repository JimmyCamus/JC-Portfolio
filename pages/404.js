import { useTheme } from "styled-components";
import Link from "next/link";
import StyledContainer from "../components/styled/StyledContainer";
import StyledH1 from "../components/styled/StyledH1";
import StyledH2 from "../components/styled/StyledH2";

const NotFound = () => {
  const theme = useTheme();
  return (
    <StyledContainer flexDirection="column" height="100vh" width="100vw">
      <StyledH1 color={theme.textColor} fontSize="60px" rFontSize="40px">
        OOOPS ERROR 404 :(
      </StyledH1>
      <StyledH2>
        <Link href="/">
          <a>CLICK HERE TO GO TO HOMEPAGE</a>
        </Link>
      </StyledH2>
    </StyledContainer>
  );
};

export default NotFound;
