import cloudBackground from "@/assets/background/background_airplane.png";
import cardMarketing from "@/assets/cardsMarketing/background.jpg";
import cancum from "@/assets/background/cancum.jpg";
import cataratas from "@/assets/background/cataratas.jpg";
import noronha from "@/assets/background/noronha.jpg";
import { CarrosselLogos } from "@/constants/index";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { MdAirplaneTicket } from "react-icons/md";

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
          <h1 className="text-4xl text-blue-600">
            Experiencia do avião mágico
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
            sunt quasi voluptates repellat deleniti excepturi aperiam dolores
            maiores? Vel rerum explicabo ipsam similique iusto voluptatum,
            voluptates itaque praesentium exercitationem!
          </p>
          <button className="w-1/4 h-10 rounded-full bg-yellow-300 cursor-pointer hover:bg-yellow-400">
            Leia mais
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-30">
        <div className=" grid grid-cols-[1fr_2fr] justify-center items-center px-32 mt-10 ">
          <div className="w-1/2 flex h-12 border-1 border-black/10 rounded-2xl justify-center items-center flex-row gap-5 shadow-md">
            <div className="text-black/50 hover:mt-2">
              <h1>Follow</h1>
            </div>
            <div className="flex w-7 h-7 rounded-full justify-center items-center">
              <FaTwitter className="text-blue-500 text-xl cursor-pointer " />
            </div>
            <div className="flex w-7 h-7 rounded-full justify-center items-center">
              <SiFacebook className="text-blue-500 text-xl cursor-pointer" />
            </div>
            <div className="flex w-7 h-7 rounded-full justify-center items-center">
              <FaGithub className="text-black text-xl cursor-pointer" />
            </div>
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
              <button className="flex justify-center items-center h-10 rounded-full">
                <BsArrowLeftCircleFill
                  className="bg-white/40 text-gray-400/40 rounded-full"
                  size={25}
                />
              </button>
              <button className="flex justify-center items-center h-10 rounded-full">
                <BsArrowRightCircleFill
                  className="bg-white text-black rounded-full"
                  size={25}
                />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-center gap-42">
            <div className="flex flex-col w-120">
              <Image
                src={cloudBackground}
                width={500}
                height={400}
                className="rounded-2xl"
                alt="teste"
              />
              <div className="w-full h-30 flex flex-row justify-center items-center shadow-xl mb-100 rounded-b-3xl gap-12">
                <div className="flex flex-col ">
                  <h1 className="text-4xl">Maldivas</h1>
                  <h1 className="text-xl opacity-30">Viajar para maldivas</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="w-30 h-10 bg-blue-500 rounded-full text-white cursor-pointer">
                    Acessar
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-120">
              <Image
                src={cloudBackground}
                width={500}
                height={400}
                className="rounded-2xl"
                alt="teste"
              />
              <div className="w-full h-30 flex flex-row justify-center items-center shadow-xl mb-100 rounded-b-3xl gap-12">
                <div className="flex flex-col ">
                  <h1 className="text-4xl">Maldivas</h1>
                  <h1 className="text-xl opacity-30">Viajar para maldivas</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="w-30 h-10 bg-blue-500 rounded-full text-white cursor-pointer">
                    Acessar
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-120">
              <Image
                src={cloudBackground}
                width={500}
                height={400}
                className="rounded-2xl"
                alt="teste"
              />
              <div className="w-full h-30 flex flex-row justify-center items-center shadow-xl mb-100 rounded-b-3xl gap-12">
                <div className="flex flex-col ">
                  <h1 className="text-4xl">Maldivas</h1>
                  <h1 className="text-xl opacity-30">Viajar para maldivas</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="w-30 h-10 bg-blue-500 rounded-full text-white cursor-pointer">
                    Acessar
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Segundo Cards */}
          <div className="w-full h-100 flex flex-col justify-start items-center gap-4">
            <h1 className="text-6xl">Journey To te Skies Made Simple</h1>
            <p className="text-2xl opacity-30 max-w-3xl text-center">
              Traveling is A Wonderful Way To Explore New Places. Learn About
              Different Cultures And Gain Unique Experiences
            </p>
          </div>

          <div className="flex flex-row gap-10 justify-center items-end w-full h-50 mb-10">
            {/* Card 1 */}
            <div className="relative w-lg ">
              <div className="flex bg-gray-200 hover:bg-blue-500 h-50 hover:h-96 transition-all duration-500 ease-in-out rounded-lg group">
                <div className="absolute right-0 opacity-0 group-hover:opacity-100 transition-all delay-75 duration-200 ease-in-out">
                  <div className="w-60 rounded-tl-lg h-60">
                    <Image
                      src={cancum}
                      width={240}
                      height={240}
                      className="rounded-bl-full w-60 h-60"
                      alt="Foto de cima da praia de cancum"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start ml-10 mt-20 group-hover:mt-0 gap-5 group-hover:gap-10">
                  <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full transition-all delay-500 duration-500 ease-in-out">
                    <IoLocationSharp size={30} />
                  </div>
                  <h2 className="text-black group-hover:text-white transition-colors delay-150 duration-300">
                    Find Your Destination
                  </h2>
                  <p className=" text-white text-sm max-w-2xs hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-300">
                    Looking for your next adventure? With Magic Flights, finding
                    the perfect trip is simple and exciting. From sunny beaches
                    to vibrant cities, we’ll help you discover the destination
                    that fits your style, time, and budget. Your dream vacation
                    is just a search away — let’s make it happen!
                  </p>
                  <button className="bg-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative w-lg">
              <div className="flex bg-gray-200 hover:bg-blue-500 h-50 hover:h-96 transition-all duration-500 ease-in-out rounded-lg group">
                <div className="absolute right-0 opacity-0 group-hover:opacity-100 transition-all delay-75 duration-200 ease-in-out">
                  <div className="w-60 rounded-tl-lg h-60">
                    <Image
                      src={cataratas}
                      width={240}
                      height={240}
                      className="rounded-bl-full w-60 h-60"
                      alt="Foto das cataratas de iguaçu"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start ml-10 mt-20 group-hover:mt-0 gap-5 group-hover:gap-10">
                  <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full transition-all delay-500 duration-500 ease-in-out">
                    <MdAirplaneTicket size={30} />
                  </div>
                  <h2 className="text-black group-hover:text-white transition-colors delay-150 duration-300">
                    Book A Ticket
                  </h2>
                  <p className="text-white text-sm max-w-2xs hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-300">
                    Are you ready to take a break and enjoy an unforgettable
                    experience? We’ve got the perfect travel package waiting for
                    you! Whether you’re dreaming of relaxing on a sunny beach,
                    exploring new cultures, or living an adventure in nature,
                    we’ll take care of every detail so you can just enjoy the
                    journey.
                  </p>
                  <button className="bg-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative w-lg">
              <div className="flex bg-gray-200 hover:bg-blue-500 h-50 hover:h-96 transition-all duration-500 ease-in-out rounded-lg group">
                <div className="absolute right-0 opacity-0 group-hover:opacity-100 transition-all delay-75 duration-200 ease-in-out">
                  <div className="w-60 rounded-tl-lg h-60">
                    <Image
                      src={noronha}
                      width={240}
                      height={240}
                      className="rounded-bl-full w-60 h-60"
                      alt="Foto da praia de fernando de noronha"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start ml-10 mt-20 group-hover:mt-0 gap-5 group-hover:gap-10">
                  <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full transition-all delay-500 duration-500 ease-in-out">
                    <IoWallet size={30} />
                  </div>
                  <h2 className="text-black group-hover:text-white transition-colors delay-150 duration-300">
                    Pay & Start Journey
                  </h2>
                  <p className="text-white text-sm max-w-2xs hidden group-hover:block opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-300">
                    Your next trip is closer than you think! With Magic Flights,
                    booking a vacation is easy, and so is paying for it. We know
                    that every traveler has different needs, so we give you the
                    freedom to decide how you’d like to handle your payments.
                    You can pay all at once or split it into smaller parts,
                    making your journey not only unforgettable but also
                    accessible.
                  </p>
                  <button className="bg-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Terceiro Cards */}
          <div className="grid grid-cols-[1fr_2fr]  w-full h-120">
            <div className="relative ">
              <Image
                src={cardMarketing}
                alt="Cloud background"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="grid grid-cols-2 w-full h-auto justify-center items-center">
              <div className="grid grid-rows-3  w-full h-50">
                <div className="flex flex-col w-full h-auto  text-6xl text-center">
                  <h1>UNSLEASH</h1>
                </div>
                <div className="flex flex-col w-full h-auto  text-6xl text-end">
                  <h1>WANDER</h1>
                </div>

                <div className="flex flex-col w-full h-auto  text-end justify-center items-center px-5">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora molestias adipisci voluptatem laudantium odio?</h1>
                </div>
              </div>
              <div className="grid grid-rows-3  w-full h-50">
                <div className="flex flex-col w-full h-auto px-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea molestiae asperiores ex veritatis quisquam nihil sed ipsam animi, !</p>

                </div>
                <div className="flex flex-col w-full h-auto text-start text-6xl">
                  <h1>LUST WITH</h1>
                </div>

                <div className="flex flex-col w-full h-auto  text-6xl text-start">
                    <h1>SKYWINGS</h1>
                </div>

              </div>
            </div>
          </div>
           <div className="flex flex-row w-full h-20 mb-[10px]">
                <div className="flex flex-row gap-10 bg-gray-200 h-full w-1/2  rounded-2xl  justify-center items-center text-center">
                    <h1 className="text-2xl text-blue-400">20% OFF</h1>
                    <h1 className="text-gray-500"> Promo only 23 ago 2025</h1>
                </div>
                <div className="flex w-full  justify-center rounded-2xl items-center text-center bg-blue-400 cursor-pointer">
                    <h1>Book A Flight Now →</h1>
                </div>
           </div>
        </div>
      </div>
    </main>
  );
}
