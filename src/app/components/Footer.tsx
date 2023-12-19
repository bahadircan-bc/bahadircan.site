import exypnosLogo from "@/assets/exypnos.png";
import TelegramIcon from "@/assets/footerIcons/telegramIcon.svg";
import XIcon from "@/assets/footerIcons/xIcon.svg";
import GithubIcon from "@/assets/footerIcons/githubIcon.svg";
import LinkedinIcon from "@/assets/footerIcons/linkedinIcon.svg";
import Image from "next/image";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-[30vh] text-white text-center absolute bottom-0 flex flex-col justify-end">
      You found a bug? <br /> Please report it to me via Telegram or Twitter.{" "}
      <br />
      <br /> Or you can fix it yourself and send a pull request. <br />
      <a
        href="https://github.com/bahadircan-bc/bahadircan.site"
        target="_blank"
        className="inline-block"
      >
        <span className="underline">Go to repository.</span>
      </a>
      <br />
      <div className="w-full h-fit flex items-center justify-center gap-10 bg-accent bg-opacity-50">
        <a target="_blank" href="https://t.me/bbahadircan">
          <TelegramIcon className="h-[24px] w-[24px] fill-white" />
        </a>
        <a target="_blank" href="https://twitter.com/BahadirCaan">
          <XIcon className="h-[24px] w-[24px] fill-white" />
        </a>
        <Image src={exypnosLogo} alt="" className="w-[70px] h-[70px]" />
        <a target="_blank" href="https://github.com/bahadircan-bc">
          <GithubIcon className="h-[24px] w-[24px] fill-white" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/bahadır-can/">
          <LinkedinIcon className="h-[24px] w-[24px] fill-white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
