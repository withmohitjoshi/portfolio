import { BsInstagram } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const SocialMedia = () => {
  return (
    <div className="text-gray-400 flex gap-4 text-xl justify-center items-center sm:justify-start lg:text-3xl">
      <a
        href="https://github.com/withmohitjoshi"
        target={"_blank"}
        rel="noreferrer"
      >
        <IoLogoGithub className="social-media" />
      </a>
      <a
        href="https://www.linkedin.com/in/withmohitjoshi"
        target={"_blank"}
        rel="noreferrer"
      >
        <ImLinkedin className="social-media" />
      </a>
      <a
        href="https://www.instagram.com/flutter.web"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsInstagram className="social-media" />
      </a>
      <a
        href="mailto:withmohitjoshi@gmail.com"
        target={"_blank"}
        rel="noreferrer"
      >
        <HiMail className="social-media text-2xl lg:text-4xl" />
      </a>
    </div>
  );
};

export default SocialMedia;
