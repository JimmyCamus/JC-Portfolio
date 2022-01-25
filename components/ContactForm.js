import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import StyledContainer from "./styled/StyledContainer";
import StyledInput from "./styled/StyledInput";
import SuccessAlert from "../utils/SuccessAlert";
import ErrorAlert from "../utils/ErrorAlert";

const ContactForm = ({ theme }) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };
    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.status !== 200) {
      ErrorAlert(theme, data.status);
      return;
    }
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
    SuccessAlert(theme);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <StyledContainer flexDirection="column">
        <StyledContainer flexDirection="row">
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            theme={theme}
            value={nameValue}
            setValue={setNameValue}
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            theme={theme}
            value={emailValue}
            setValue={setEmailValue}
          />
        </StyledContainer>
        <div>
          <TextArea
            name="message"
            placeholder="Your Message"
            theme={theme}
            value={messageValue}
            setValue={setMessageValue}
          />
        </div>
        <StyledInput
          type="submit"
          textColor={theme.textColor}
          borderColor={theme.primaryColor}
          fBorderColor={theme.primaryColor}
          value="Submit"
        />
      </StyledContainer>
    </form>
  );
};

export default ContactForm;
