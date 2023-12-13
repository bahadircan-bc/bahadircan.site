import profileImage from "../../assets/IMG_2673.jpeg";

function ElevatorPitch() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-transparent text-white flex flex-col items-center justify-center gap-10">
      <div className="rounded-xl w-2/3 h-fit p-10 flex items-center bg-gradient-to-br from-[#0f5c6d7a] to-[#ad4d4276] shadow-2xl shadow-black drop-shadow-2xl">
        <img
          className="h-[calc(18.75vw_-2.5rem)] aspect-square object-cover rounded-full shadow-2xl shadow-black drop-shadow-2xl border border-neutral-200"
          src={profileImage}
          alt=""
        />
        <div className="w-full m-10 p-10 text-black bg-gray-300 rounded-lg shadow-2xl shadow-black drop-shadow-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates id
          natus incidunt porro aliquam cupiditate adipisci iure officiis esse
          numquam ullam illo odio dolor architecto veniam, magnam rerum. Porro,
          accusantium. Possimus non dolor modi omnis provident amet vitae nam
          atque perferendis totam, illo tempore maiores minima esse at maxime
          eligendi. Exercitationem doloribus labore eos iure nemo corrupti nihil
          amet possimus. Voluptatibus suscipit ipsum id modi earum! Ad hic aut
          libero excepturi? Atque veniam nulla dicta sapiente quas nemo,
          inventore minima voluptatum veritatis totam aut aspernatur et. Iure
          sit quo repellendus!
        </div>
      </div>
    </div>
  );
}

export default ElevatorPitch;
