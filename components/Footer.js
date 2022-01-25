import Link from "next/link";
import Image from "next/image";
import StyledContainer from "./styled/StyledContainer";
import StyledCard from "./styled/StyledCard";
import StyledH1 from "./styled/StyledH1";
import StyledH3 from "./styled/StyledH3";
import StyledP from "./styled/StyledP";

const Footer = ({ theme }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <StyledContainer>
        <StyledCard
          width="100%"
          height="20%"
          rheight="30%"
          backgroundColor={theme.cardColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <StyledH3 fontSize="25px" rFontSize="16px">
            Passionate about what I do and always learning some things new.
          </StyledH3>
          <StyledH1 color={theme.textColor} fontSize="30px" rFontSize="30px">
            JC
          </StyledH1>
          <StyledContainer flexDirection="row">
            <div style={{ margin: "0px 10px" }}>
              <Link href="https://github.com/JimmyCamus">
                <a target="_blank">
                  <Image
                    alt="My Github account"
                    src="/icons/github.png"
                    width="32"
                    height="32"
                  ></Image>
                </a>
              </Link>
            </div>
            <div style={{ margin: "0px 10px" }}>
              <Link href="https://www.linkedin.com/in/jeremy-camus-varela/">
                <a target="_blank">
                  <Image
                    alt="My LinkedIn account"
                    src="/icons/linkedin.png"
                    width="32"
                    height="32"
                  ></Image>
                </a>
              </Link>
            </div>
          </StyledContainer>
          <StyledP fontWeight="700" fontSize="14px" rFontSize="12px" color={theme.textColor}>
            handcrafted by @JimmyCamus - C 2022
          </StyledP>
        </StyledCard>
      </StyledContainer>
    </div>
  );
};

export default Footer;
