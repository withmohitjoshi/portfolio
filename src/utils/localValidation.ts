const EMAIL_PATTERN = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
type FormErrorType = {
  nameError: string;
  emailError: string;
  messageError: string;
};
export const localValidation = (
  e: any,
  formError: FormErrorType,
  setFormError: React.Dispatch<React.SetStateAction<FormErrorType>>
) => {
  if (e.target[0].value.length === 0) {
    setFormError({ ...formError, nameError: "Please enter your name" });
    return false;
  } else if (e.target[1].value.length === 0) {
    setFormError({ ...formError, emailError: "Please enter your email" });
    return false;
  } else if (EMAIL_PATTERN.test(e.target[1].value) === false) {
    setFormError({ ...formError, emailError: "Please enter a valid email" });
    return false;
  } else if (e.target[2].value.length === 0) {
    setFormError({ ...formError, messageError: "You forget something" });
    return false;
  } else {
    return true;
  }
};
