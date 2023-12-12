import CallIcon from "../../assets/contactIcons/call.svg?react";
import MessageIcon from "../../assets/contactIcons/message.svg?react";
import WhatsappIcon from "../../assets/contactIcons/whatsapp.svg?react";
import TelegramIcon from "../../assets/contactIcons/telegram.svg?react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import twitterqr from "../../assets/contactIcons/qrs/twitter_qr.png";
import discordqr from "../../assets/contactIcons/qrs/discord_qr.png";
import instagramqr from "../../assets/contactIcons/qrs/instagram_qr.png";
import githubqr from "../../assets/contactIcons/qrs/github_qr.png";
import linkedinqr from "../../assets/contactIcons/qrs/linkedin_qr.png";
import telegramqr from "../../assets/contactIcons/qrs/telegram_qr.png";
import whatsappqr from "../../assets/contactIcons/qrs/whatsapp_qr.png";

function QRCarousel() {
  return (
    <Carousel
      className="h-[50vh]"
      autoPlay
      infiniteLoop
      showArrows={false}
      showThumbs={false}
    >
      <div className="h-[50vh] flex flex-col items-center justify-center gap-5">
        <p className="text-base">
          Twitter <br />{" "}
          <span className="text-xs">
            (...or x whatever you want to call it.)
          </span>
        </p>
        <div>
          <img className="h-[30vh]" src={twitterqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] flex flex-col items-center justify-center gap-5">
        <p>Instagram</p>
        <div>
          <img className="h-[30vh]" src={instagramqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] flex flex-col items-center justify-center gap-5">
        <p>GitHub</p>
        <div>
          <img className="h-[30vh]" src={githubqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] flex flex-col items-center justify-center gap-5">
        <p>LinkedIn</p>
        <div>
          <img className="h-[30vh]" src={linkedinqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] flex flex-col items-center justify-center gap-5">
        <p>Telegram</p>
        <div>
          <img className="h-[30vh]" src={telegramqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] flex flex-col items-center justify-center gap-5">
        <p>WhatsApp</p>
        <div>
          <img className="h-[30vh]" src={whatsappqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] flex flex-col items-center justify-center gap-5">
        <p>Discord</p>
        <div>
          <img className="h-[30vh]" src={discordqr} alt="" />
        </div>
      </div>
    </Carousel>
  );
}

function TelephoneContacts() {
  return (
    <div className="w-full h-1/2 rounded-lg outline outline-primary bg-accent bg-opacity-25 flex flex-col items-center justify-evenly">
      <p>You can call me...</p>
      <p className="text-3xl">+90 542 214 05 97</p>
      <div className="w-1/2 flex justify-evenly">
        <Link target="_blank" to="tel:905422140597">
          <CallIcon className="h-[25px] w-[25px] text-gray-300" />
        </Link>
        <Link target="_blank" to="sms:905422140597">
          <MessageIcon className="h-[25px] w-[25px] text-yellow-500" />
        </Link>
        <Link target="_blank" to="https://wa.me/905422140597">
          <WhatsappIcon className="h-[25px] w-[25px] text-[#25D366] " />
        </Link>
        <Link target="_blank" to="https://t.me/bbahadircan">
          <TelegramIcon className="h-[25px] w-[25px] text-[#26A5E4]" />
        </Link>
      </div>
    </div>
  );
}

function EmailContacts() {
  return (
    <div className="w-full h-1/2 rounded-lg outline outline-primary bg-accent bg-opacity-25 flex flex-col items-center justify-center gap-5">
      <p>Or e-mail me...</p>
      <Link target="_blank" to="mailto:bahadircan.bc@gmail.com">
        <p className="text-xl">bahadircan.bc@gmail.com</p>
      </Link>
    </div>
  );
}

function ContactHeader() {
  return (
    <div className="w-full h-screen text-white flex items-center justify-center gap-5">
      <div className="w-1/4 h-1/2 gap-5 flex flex-col text-base">
        <TelephoneContacts />
        <EmailContacts />
      </div>
      <div className="w-1/4 h-1/2 rounded-lg outline outline-primary bg-accent bg-opacity-25">
        <QRCarousel />
      </div>
    </div>
  );
}

export default ContactHeader;
