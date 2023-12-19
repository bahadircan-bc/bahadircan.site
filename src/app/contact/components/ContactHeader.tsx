'use client'

import CallIcon from "@/assets/contactIcons/call.svg";
import MessageIcon from "@/assets/contactIcons/message.svg";
import WhatsappIcon from "@/assets/contactIcons/whatsapp.svg";
import TelegramIcon from "@/assets/contactIcons/telegram.svg";

import twitterqr from "@/assets/contactIcons/qrs/twitter_qr.png";
import discordqr from "@/assets/contactIcons/qrs/discord_qr.png";
import instagramqr from "@/assets/contactIcons/qrs/instagram_qr.png";
import githubqr from "@/assets/contactIcons/qrs/github_qr.png";
import linkedinqr from "@/assets/contactIcons/qrs/linkedin_qr.png";
import telegramqr from "@/assets/contactIcons/qrs/telegram_qr.png";
import whatsappqr from "@/assets/contactIcons/qrs/whatsapp_qr.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";
import Link from "next/link";

function QRCarousel() {
  return (
    <Carousel
      className="h-[50vh]"
      autoPlay
      infiniteLoop
      emulateTouch
      showThumbs={false}
    >
      <div className="h-[50vh] p-[10%] relative flex items-center justify-center">
        <p className="text-base absolute top-0">
          Twitter <br />{" "}
          <span className="text-xs">
            (...or x whatever you want to call it.)
          </span>
        </p>
        <div>
          <Image priority className="aspect-square" src={twitterqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] p-[10%] relative flex items-center justify-center">
        <p className="text-base absolute top-0">Instagram</p>
        <div>
          <Image priority className="aspect-square" src={instagramqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] p-[10%] relative flex items-center justify-center">
        <p className="text-base absolute top-0">GitHub</p>
        <div>
          <Image priority className="aspect-square" src={githubqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] p-[10%] relative flex items-center justify-center">
        <p className="text-base absolute top-0">LinkedIn</p>
        <div>
          <Image priority className="aspect-square" src={linkedinqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] p-[10%] relative flex items-center justify-center">
        <p className="text-base absolute top-0">Telegram</p>
        <div>
          <Image priority className="aspect-square" src={telegramqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] p-[10%] relative flex items-center justify-center">
        <p className="text-base absolute top-0">WhatsApp</p>
        <div>
          <Image priority className="aspect-square" src={whatsappqr} alt="" />
        </div>
      </div>
      <div className="h-[50vh] p-[10%] relative flex items-center justify-center">
        <p className="text-base absolute top-0">Discord</p>
        <div>
          <Image priority className="w-[30vh] aspect-square" src={discordqr} alt="" />
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
        <Link target="_blank" href="tel:905422140597">
          <CallIcon className="h-[25px] w-[25px] text-gray-300" />
        </Link>
        <Link target="_blank" href="sms:905422140597">
          <MessageIcon className="h-[25px] w-[25px] text-yellow-500" />
        </Link>
        <Link target="_blank" href="https://wa.me/905422140597">
          <WhatsappIcon className="h-[25px] w-[25px] text-[#25D366] " />
        </Link>
        <Link target="_blank" href="https://t.me/bbahadircan">
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
      <Link target="_blank" href="mailto:bahadircan.bc@gmail.com">
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
