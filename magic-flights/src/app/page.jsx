import airPlane from "@/assets/background/AirPlane.png";
import cloudBackground from "@/assets/background/Cloud-Background.jpg";
import { CarrosselLogos } from "@/constants/index";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";


export default function Home() {
  return (
    <main className="w-full h-screen relative gap-5">
      {/* Background de nuvem */}
      <div className="px-10">
        <div className="relative w-full h-150 rounded-4xl overflow-hidden z-0">
          <Image
            src={cloudBackground}
            alt="Cloud background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Avião acima da nuvem */}
      <div className="w-full absolute top-[-220px] right-0 left-[1120px] h-full z-1  max-w-4xl">
        <Image
          src={airPlane}
          alt="Airplane"
          fill
          className="object-cover object-left max-w-4xl"
        />
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
        </div>
      </div>
    </main>
  );
}
