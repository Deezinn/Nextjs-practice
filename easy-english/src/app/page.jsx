import Image from "next/image";
import personIcon from "@/assets/images/person_icon/person.jpeg";
import { Icon } from "@iconify/react";
import MicroCard from "@/components/microCard";
import background_person from "@/assets/images/background_icon/person.png";
export default function Home() {
  return (
    <div className="w-full h-auto p-2">
      <div className="w-full h-auto grid grid-cols-[4fr_2fr]">
        {/* Grade da esquerda */}
        <div className="w-full h-auto grid grid-rows-[1fr_2fr] rounded gap-10">
          <div className="w-full h-auto p-5">
            <div className="w-full h-20 flex justify-between">
              <div className="flex flex-row gap-2 justify-center items-center">
                <Icon
                  icon="uil:brain"
                  width="60"
                  height="60"
                  className="text-black"
                />
                <h1 className="flex flex-row text-3xl">
                  Moz<h1 className="text-pink-400">ok</h1>
                </h1>
              </div>
              <div className="flex flex-row gap-9 justify-center items-center">
                <Icon
                  icon="line-md:bell-loop"
                  width="30"
                  height="30"
                  className="text-gray-500"
                />
                <Icon
                  icon="bytesize:options"
                  width="30"
                  height="30"
                  className="text-gray-500"
                />
              </div>
            </div>
            <div className="w-full h-full grid grid-cols-[1.3fr_2fr]">
              <div className="w-full h-100 relative">
                <Image
                  src={background_person}
                  alt="Foto de perfil"
                  fill
                  className="object-cover  "
                />
              </div>
              <div className="w-full h-auto grid grid-rows-[3fr_1fr]">
                <div className="w-full h-full flex flex-col text-6xl px-10 justify-center items-start">
                  <h1 className="">Hi André</h1>
                  <h1 className="font-bold">What do you wanna learn?</h1>
                </div>
                <div className="flex">
                  <div className="w-full h-20 flex bg-gray-300 rounded-full px-5 justify-between items-center shadow-2xl">
                    <input
                      type="text"
                      class="flex w-full h-18 text-2xl px-5 focus:outline-none focus:ring-0"
                      placeholder="Search here"
                    />

                    <div className="w-30 h-18 bg-red-500 rounded-full flex justify-center items-center hover:bg-red-600 cursor-pointer">
                      <Icon
                        icon="line-md:search"
                        width="50"
                        height="50"
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-75 flex-row p-5">
            <div className="w-full h-20  flex justify-start items-center gap-12 text-2xl px-10">
              <div className="flex flex-col justify-between items-center  cursor-pointer">
                <h1>All</h1>
                <div className="w-10 h-1 bg-amber-400 rounded-fullr"></div>
              </div>
              <div className="cursor-pointer">
                <h1>New</h1>
              </div>
              <div className="cursor-pointer">
                <h1>Popular</h1>
              </div>
            </div>
            <div className="w-full h-auto grid grid-cols-[2fr_2fr] px-10">
              <h1>teste</h1>
              <h1>teste</h1>
            </div>
          </div>
        </div>

        {/* Grade da direita */}
        <div className="w-full h-auto p-5">
          <div className="w-full h-auto grid grid-rows-[0.5fr_1fr_0.5fr] gap-5">
            {/* Primeiro card */}
            <div className="w-full h-60 flex flex-col text-white bg-gradient-to-r from-black/80 from-10% to-black to-90% p-5 gap-8 rounded-2xl">
              {/* Parte de cima */}
              <div className="w-full h-20 grid grid-cols-[1fr_2fr_1fr]">
                <div className="w-full h-auto flex justify-center items-center">
                  <div className="relative w-20 h-20">
                    <Image
                      src={personIcon}
                      alt="Foto de perfil"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="w-full h-auto flex flex-col">
                  <h1 className="text-4xl">André Luiz</h1>
                  <h1 className="text-md opacity-50">Developer</h1>
                </div>
                <div className="w-full h-auto flex justify-center mr-10">
                  <Icon
                    icon="svg-spinners:3-dots-move"
                    width="70"
                    height="70"
                    className="text-white"
                  />
                </div>
              </div>

              {/* Estatísticas */}
              <div className="w-full h-auto flex flex-row justify-evenly items-center">
                <div className="flex flex-col">
                  <h1 className="text-gray-400">Score</h1>
                  <h1 className="text-5xl">9.7</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-400">Investimento</h1>
                  <h1 className="text-5xl">10.5K</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-gray-400">Contribuidores</h1>
                  <h1 className="text-5xl">100k</h1>
                </div>
              </div>
            </div>

            {/* Segundo card */}
            <div>
              <MicroCard />
            </div>

            {/* Terceiro card */}
            <div className="w-full h-72 bg-blue-500 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


