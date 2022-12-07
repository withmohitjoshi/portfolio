import { ChangeEvent, useEffect, useState } from "react";
import { postForm } from "../../../api/postForm";
import { localValidation } from "../../../utils/localValidation";

const formErrorInitialState = {
  nameError: "",
  emailError: "",
  messageError: "",
};
const formInitialState = {
  name: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [formState, setFormState] = useState(formInitialState);
  const [formError, setFormError] = useState(formErrorInitialState);

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormState({ ...formState, [e.target.name]: e.target.value });

  useEffect(() => {
    setFormError(formErrorInitialState);
  }, [formState]);

  return (
    <form
      className="flex flex-col w-full xs:w-5/6 justify-self-center md:w-full lg:w-3/4"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (localValidation(e, formError, setFormError)) {
          postForm(formState);
          setFormState(formInitialState);
        }
      }}
    >
      <input
        type={"text"}
        placeholder="Your Name"
        name="name"
        className="contact-me-form"
        value={formState.name}
        onChange={handleFormChange}
      />
      <span className="contact-form-error-msg">{formError.nameError}</span>
      <input
        type={"email"}
        name="email"
        placeholder="Your Email"
        className="contact-me-form"
        value={formState.email}
        onChange={handleFormChange}
      />
      <span className="contact-form-error-msg">{formError.emailError}</span>
      <textarea
        placeholder="Write some message"
        className="contact-me-form resize-none"
        name="message"
        value={formState.message}
        onChange={handleFormChange}
      ></textarea>
      <span className="contact-form-error-msg">{formError.messageError}</span>
      <button
        type={"submit"}
        className="w-fit bg-gradient-to-r from-sky-400  to-blue-700 text-[0.8rem] sm:text-xl px-3 py-2 sm:px-6 sm:py-3 text-white rounded-sm"
      >
        Let's talk
      </button>
    </form>
  );
};

export default ContactForm;
