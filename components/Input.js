import StyledInput from "./styled/StyledInput";

const Input = ({ inputName, inputType, placeholder, theme, value, setValue }) => {
  return (
    <StyledInput
      name={inputName}
      type={inputType}
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

export default Input;
