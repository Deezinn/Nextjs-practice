import Image from "next/image";
import personIcon from "@/assets/images/person_icon/person.jpeg";
import { Icon } from "@iconify/react";
import MicroCard from "@/components/microCard";

export default function Home() {
  return (
    <div className="w-full h-auto p-2">
      <div className="w-full h-auto grid grid-cols-[4fr_2fr]">
        {/* Grade da esquerda */}
        <div className="w-full h-auto grid grid-rows-[2fr_1fr] bg-gray-100 rounded">
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





          </div>
          <div className="w-full h-auto p-5"></div>
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
                    width="60"
                    height="60"
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
