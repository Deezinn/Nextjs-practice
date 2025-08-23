import cloudBackground from "@/assets/background/background_airplane.png";
import cardMarketing from '@/assets/cardsMarketing/background.jpg';
import { CarrosselLogos } from "@/constants/index";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

export default function Home() {
  return (
    <main className="w-full h-auto relative gap-5">
      {/* Background de nuvem */}
      <div className="flex flex-row justify-center w-full items-center gap-24">
        <div className="relative w-1/3 h-130 z-0 ">
          <Image
            src={cloudBackground}
            alt="Cloud background"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 text-center justify-center w-[700px] h-auto ">
          <h1 className="text-4xl text-blue-600">Experiencia do avião mágico</h1>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id sunt quasi voluptates repellat deleniti excepturi aperiam dolores maiores? Vel rerum explicabo ipsam similique iusto voluptatum, voluptates itaque praesentium exercitationem!</p>
          <button className="w-1/4 h-10 rounded-full bg-yellow-300 cursor-pointer hover:bg-yellow-400">Leia mais</button>
        </div>
      </div>
      <div className="flex flex-col gap-30">
        <div className=" grid grid-cols-[1fr_2fr] justify-center items-center px-32 mt-10 ">
          <div className="w-1/2 flex h-12 border-1 border-black/10 rounded-2xl justify-center items-center flex-row gap-5 shadow-md">
            <div className="text-black/50 hover:mt-2"><h1>Follow</h1></div>
            <div className="flex w-7 h-7 rounded-full justify-center items-center"><FaTwitter className="text-blue-500 text-xl cursor-pointer " /></div>
            <div className="flex w-7 h-7 rounded-full justify-center items-center"><SiFacebook className="text-blue-500 text-xl cursor-pointer" /></div>
            <div className="flex w-7 h-7 rounded-full justify-center items-center"><FaGithub className="text-black text-xl cursor-pointer" /></div>
          </div>

          <div className="flex flex-row justify-between">
            {CarrosselLogos.map((logos, index) => (
              <h1 key={index}>{logos.imagem}</h1>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-[1fr_5fr] px-32">
          <div className="flex flex-row justify-between h-20">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl">Destinos Populares</h1>
              <p className="text-2xl opacity-30">Escolha e decole!</p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center h-20">
              <button className="flex justify-center items-center h-10 rounded-full"><BsArrowLeftCircleFill className="bg-white/40 text-gray-400/40 rounded-full" size={25} /></button>
              <button className="flex justify-center items-center h-10 rounded-full"><BsArrowRightCircleFill className="bg-white text-black rounded-full" size={25} /></button>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-center gap-42">
            <div className="flex flex-col w-120">
              <Image src={cloudBackground} width={500} height={400} className="rounded-2xl" alt="teste" />
              <div className="w-full h-30 flex flex-row justify-center items-center shadow-xl mb-100 rounded-b-3xl gap-12">
                <div className="flex flex-col ">
                  <h1 className="text-4xl">
                    Maldivas
                  </h1>
                  <h1 className="text-xl opacity-30">
                    Viajar para maldivas
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="w-30 h-10 bg-blue-500 rounded-full text-white cursor-pointer">Acessar</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-120">
              <Image src={cloudBackground} width={500} height={400} className="rounded-2xl" alt="teste" />
              <div className="w-full h-30 flex flex-row justify-center items-center shadow-xl mb-100 rounded-b-3xl gap-12">
                <div className="flex flex-col ">
                  <h1 className="text-4xl">
                    Maldivas
                  </h1>
                  <h1 className="text-xl opacity-30">
                    Viajar para maldivas
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="w-30 h-10 bg-blue-500 rounded-full text-white cursor-pointer">Acessar</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-120">
              <Image src={cloudBackground} width={500} height={400} className="rounded-2xl" alt="teste" />
              <div className="w-full h-30 flex flex-row justify-center items-center shadow-xl mb-100 rounded-b-3xl gap-12">
                <div className="flex flex-col ">
                  <h1 className="text-4xl">
                    Maldivas
                  </h1>
                  <h1 className="text-xl opacity-30">
                    Viajar para maldivas
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="w-30 h-10 bg-blue-500 rounded-full text-white cursor-pointer">Acessar</button>
                </div>
              </div>
            </div>
          </div>
          {/* Segundo Cards */}
          <div className="w-full h-120 flex flex-col justify-start items-center">
            <h1 className="text-5xl">Journey To te Skies Made Simple</h1>
            <p>lassName="text-2xl opacity-30"Traveling is A Wonderful Way To Explore New Places. Learn About Different Cultures And Gain Unique Experiences</p>
          </div>


          {/* Terceiro Cards */}
          <div className="grid grid-cols-[1fr_2fr]  w-full h-100 mb-[100px]">
            <div className="relative ">
              <Image
                src={cardMarketing}
                alt="Cloud background"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="flex flex-row w-full h-auto bg-red-50 justify-center items-center">
              <div className="flex-row bg-blue-500 w-full h-full justify-center items-center">
                <h1>teste</h1>
                <h1>teste1</h1>
              </div>
              <div className="flex-col bg-green-500 w-full h-full justify-center items-centerjustify-center items-center">
                <h1>teste</h1>
                <h1>teste</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
