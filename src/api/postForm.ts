import axios from "axios";
import { toast } from "react-toastify";
type FormStateType = {
  name: string;
  email: string;
  message: string;
};
export const postForm = (formState: FormStateType) =>
  axios
    .post(
      "https://getform.io/f/a89f02db-0492-41bd-a37a-2c323f720f0c",
      formState,
      { headers: { Accept: "application/json" } }
    )
    .then((response) => {
      if (response.status === 200) {
        toast("Message sent 🙌", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      }
    })
    .catch((error) => {
      if (error) {
        toast("Something went wrong 🤕", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      }
    });
