import Image from "next/image";
import personIcon from "@/assets/images/person_icon/person.jpeg";
export default function Home() {
  return (
    <>
      <div className="w-full h-auto p-2">
        <div className="w-full h-auto grid grid-cols-[4fr_2fr]">
          {/* Grade da esquerda */}
          <div className="w-full h-auto bg-gray-200">
            <h1>teste</h1>
          </div>
          {/* Grade da direita */}
          <div className="w-full h-auto p-5 ">
            <div className="w-full h-auto grid grid-rows-3 gap-5">
              <div className="w-full h-auto flex flex-col text-white bg-black p-5 gap-12 rounded-2xl">
                {/* Parte de cima */}
                <div className="w-full h-20 grid grid-cols-3 justify-center items-center">
                  <div className="w-full h-auto flex justify-center items-center ">
                    <div className="relative w-20 h-20">
                      <Image
                        src={personIcon}
                        fill
                        className=" object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="w-full h-auto flex flex-col justify-center">
                    <h1 className="text-4xl">André Luiz</h1>
                    <h1 className="text-2xl">Developer</h1>
                  </div>
                  <div className="w-full h-auto flex justify-center mr-10">
                    <h1 className="text-6xl">...</h1>
                  </div>
                </div>

                <div className="w-full h-auto flex flex-row justify-evenly items-center relative ">
                  <div className="flex flex-col">
                    <h1>teste1</h1>
                    <h1>teste1</h1>
                  </div>
                  <div className="flex flex-col">
                    <h1>teste1</h1>
                    <h1>teste1</h1>
                  </div>
                  <div className="flex flex-col">
                    <h1>teste1</h1>
                    <h1>teste1</h1>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto bg-blue-500">
                <h1>teste</h1>
              </div>
              <div className="w-full h-auto bg-blue-500">
                <h1>teste</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
