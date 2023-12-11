import exypnosLogo from "../assets/exypnos.png";
import TelegramIcon from "../assets/footerIcons/telegramIcon.svg?react";
import XIcon from "../assets/footerIcons/xIcon.svg?react";
import GithubIcon from "../assets/footerIcons/githubIcon.svg?react";
import LinkedinIcon from "../assets/footerIcons/linkedinIcon.svg?react";

function Footer() {
  return (
    <div className="w-full h-[30vh] flex">
      <div className=" mt-auto w-full h-fit flex items-center justify-center gap-10 bg-accent bg-opacity-50">
        <TelegramIcon className="h-[24px] w-[24px] fill-white" />
        <XIcon className="h-[24px] w-[24px] fill-white" />
        <img src={exypnosLogo} alt="" className="w-[70px] h-[70px]" />
        <GithubIcon className="h-[24px] w-[24px] fill-white" />
        <LinkedinIcon className="h-[24px] w-[24px] fill-white" />
      </div>
    </div>
  );
}

export default Footer;
