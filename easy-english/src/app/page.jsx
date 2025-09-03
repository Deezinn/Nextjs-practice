import Image from "next/image";
import personIcon from "@/assets/images/person_icon/person.jpeg";
import { Icon } from "@iconify/react";
import MicroCard from "@/components/microCard";
import background_person from "@/assets/images/background_icon/person.png";
import mobile_marketing from "@/assets/images/card_image/Mobile Marketing-pana.png"
import { ValuesMockCalendar } from "@/constants/main";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-screen grid sm:grid-rows-[4fr_2fr] md:grid-cols-[4fr_2fr] gap-5" >
        {/* Grade da esquerda */}
        <div className="w-full h-auto grid grid-rows-[0.1fr_0.1fr] rounded gap-10">
          <div className="w-full h-auto p-5">
            {/* Topo */}
            <div className="w-full h-auto flex justify-between items-center ">
              <div className="flex flex-row gap-2 items-center">
                <Icon icon="uil:brain" width="60" height="60" className="text-black" />
                <h1 className="flex flex-row text-3xl">
                  Moz <span className="text-pink-400">ok</span>
                </h1>
              </div>
              <div className="flex flex-row gap-9 items-center">
                <Icon icon="line-md:bell-loop" width="30" height="30" className="text-gray-500" />
                <Icon icon="bytesize:options" width="30" height="30" className="text-gray-500" />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="w-full h-full grid grid-rows-[4fr_0.1fr] md:grid-cols-[1.3fr_2fr] gap-5" >
              <div className="w-full hidden md:block h-auto relative">
                <Image src={background_person} alt="Foto de perfil" fill className="object-cover" />
              </div>
              <div className="w-full h-auto grid md:grid-rows-[3fr_1fr] gap-5">
                <div className="w-full h-full flex flex-col text-6xl px-10 justify-center items-start ">
                  <h1>Hi André</h1>
                  <h1 className="font-bold">What do you wanna learn?</h1>
                </div>
                <div className="flex">
                  <div className="w-full h-[80px] flex rounded-full px-5 justify-between items-center shadow-2xl">
                    <input
                      type="text"
                      className="flex w-full h-full text-2xl px-5 focus:outline-none focus:ring-0 rounded-full"
                      placeholder="Search here"
                    />
                    <div className="w-[120px] h-full bg-red-500 rounded-full flex justify-center items-center hover:bg-red-600 cursor-pointer">
                      <Icon icon="line-md:search" width="50" height="50" className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filtros e cards */}
          <div className="w-full h-auto flex flex-col p-5 ">
            <div className="w-full h-auto flex justify-between items-center gap-6 text-2xl px-10">
              <div className="flex flex-row gap-5">
                <div className="flex flex-col justify-between items-center cursor-pointer">
                  <h1>All</h1>
                  <div className="w-10 h-1 bg-amber-400 rounded-full"></div>
                </div>
                <div className="cursor-pointer">
                  <h1>New</h1>
                </div>
                <div className="cursor-pointer">
                  <h1>Popular</h1>
                </div>
                <div>

                </div>
              </div>
              <div className="flex flex-row gap-5">
                <Icon icon="line-md:list-3-filled" width="30" height="30" className="text-gray-500" />
                <Icon icon="mingcute:cube-3d-line" width="30" height="30" className="text-gray-500" />
              </div>
            </div>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-[1.3fr_2fr] p-5 gap-5">
              <div className="w-full h-auto rounded-2xl p-10 shadow-2xl flex flex-col justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl md:text-5xl font-bold">Easy English</h1>
                  <p className="text-xl text-gray-500">Language cources</p>
                </div>
                <div className="flex flex-row justify-center items-center ">
                  <div className="relative w-50 h-50 hidden md:block"> <Image src={mobile_marketing} alt="Foto de perfil" fill className="object-cover" /></div>
                </div>
                <div className="w-full h-auto flex flex-row justify-between items-center text-center">
                  <div className="flex flex-row justify-center items-center gap-5 ">
                    <h1 className="flex justify-center items-center text-center w-25 h-2 p-6 bg-cyan-200 rounded">$32,00</h1>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-5 ">
                    <Icon icon="line-md:arrow-right" width="30" height="30" className="text-orange-200 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="w-full h-auto grid grid-rows-2 md:grid-rows-2 gap-2">
                <div className="w-full h-auto shadow-2xl rounded-2xl p-10 flex flex-col justify-between gap-5">
                  <div className="flex flex-col w-full h-auto">
                    <h1 className="text-2xl md:text-5xl font-bold">Illustrator "Professinal"</h1>
                    <h1 className="text-xl text-gray-500">More skills</h1>
                  </div>
                  <div className="relative flex flex-row justify-between w-full h-auto items-center">

                    <h1 className="flex justify-center items-center text-center w-25 h-2 p-6 bg-cyan-200 rounded">
                      $32,00
                    </h1>
                    <Icon icon="line-md:arrow-right" width="30" height="30" className="text-orange-200 cursor-pointer" />
                  </div>

                </div>
                <div className="w-full h-auto shadow-2xl rounded-2xl p-10 flex flex-col justify-between gap-5">
                  <div className="flex flex-col">
                    <h1 className="text-2xl md:text-5xl font-bold">Cybersecurity</h1>
                    <h1 className="text-xl text-gray-500">Best hacker</h1>
                  </div>
                  <div className="relative flex flex-row justify-between w-full h-auto items-center">

                    <h1 className="flex justify-center items-center text-center w-25 h-2 p-6 bg-red-200 rounded">
                      $100,00
                    </h1>
                    <Icon icon="line-md:arrow-right" width="30" height="30" className="text-orange-200 cursor-pointer" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grade da direita */}
        <div className="w-full h-auto p-5">
          <div className="w-full h-auto grid grid-rows-[0.5fr_1fr_0.5fr] gap-5">
            {/* Primeiro card */}
            <div className="w-full h-60 flex flex-col text-white bg-gradient-to-r from-black/80 to-black p-5 gap-8 rounded-2xl">
              {/* Parte de cima */}
              <div className="w-full h-20 grid grid-cols-[1fr_2fr_1fr] items-center">
                <div className="flex justify-center items-center">
                  <div className="relative w-20 h-20">
                    <Image src={personIcon} alt="Foto de perfil" fill className="object-cover rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-4xl">André Luiz</h1>
                  <h1 className="text-md opacity-50">Developer</h1>
                </div>
                <div className="flex justify-center mr-10">
                  <Icon icon="svg-spinners:3-dots-move" width="70" height="70" className="text-white" />
                </div>
              </div>

              {/* Estatísticas */}
              <div className="w-full flex justify-evenly items-center">
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
            <div className="w-full h-full rounded-2xl md:p-10 flex flex-row justify-center items-end  gap-2">
              {ValuesMockCalendar.map((value, key) => (
                <div key={key} className="relative flex flex-row w-full h-60 justify-center items-center text-center rounded-2xl">
                  <div className="shadow-xl flex flex-col w-full h-50 rounded-2xl justify-center items-center text-center gap-12">
                    {key === 1 || key === 3 ? <div className="absolute top-15 w-5 h-5 bg-red-400 rounded-full "> </div> : null}
                    <div>
                      <h1 className="text-2xl">{value.dia}</h1>
                      <h1 className="text-sm">{value.mes}</h1>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
