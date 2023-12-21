import profileImage from "@/assets/IMG_2673.jpeg";
import Image from "next/image";

function ElevatorPitch() {
  return (
    <div className="w-full min-h-screen h-fit bg-gradient-to-b from-black to-transparent text-white flex flex-col items-center justify-center gap-10">
      <div className="rounded-xl w-[90%] h-fit p-4 lg:p-10 flex flex-col lg:flex-row items-center bg-gradient-to-br from-[#0f5c6d7a] to-[#ad4d4276] shadow-2xl shadow-black drop-shadow-2xl">
        <Image
          className="w-1/2 lg:w-[calc(18.75vw_-40px)] aspect-square object-cover rounded-full shadow-2xl shadow-black drop-shadow-2xl border border-neutral-200"
          src={profileImage}
          alt=""
        />
        <div className="w-full m-5 lg:m-10 p-5 lg:p-10 text-black bg-gray-300 rounded-lg shadow-2xl shadow-black drop-shadow-2xl whitespace-pre-line">
          {`👋 Hello! I'm Bahadır, a passionate and versatile developer with a keen eye for creating innovative solutions. My expertise lies in Web development, and I thrive on turning complex ideas into functional and user-friendly applications.

🚀 Whether it's building robust web applications, crafting elegant mobile solutions, or diving into the world of cryptocurrencies, I bring a creative and analytical approach to every project. My commitment to staying on the cutting edge of technology ensures that my solutions are not just current but ahead of the curve.

💡 With a solid foundation in React, I've successfully deployed many static and dynamic websites. My passion for clean code and effective problem-solving drives me to deliver high-quality results that exceed expectations.

🌐 Explore my portfolio to see how I've tackled challenges and brought ideas to life. Whether you're looking for a reliable team player or an independent developer who takes ownership of projects, I'm excited to bring my skills and enthusiasm to your next venture.

Let's collaborate and transform ideas into reality! Feel free to reach out or connect with me on my socials to start a conversation.`}
        </div>
      </div>
    </div>
  );
}

export default ElevatorPitch;

// h-[calc(18.75vw_-2.5rem)]
