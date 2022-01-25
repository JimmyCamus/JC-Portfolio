import StyledTextArea from "./styled/StyledTextArea";

const TextArea = ({ inputName, placeholder, theme, value, setValue }) => {
  return (
    <StyledTextArea
      name={inputName}
      placeholder={placeholder}
      textColor={theme.textColor}
      borderColor={theme.secondaryColor}
      fBorderColor={theme.primaryColor}
      required={true}
      autoComplete="off"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextArea;
