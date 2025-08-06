import { PiAirplaneInFlightFill } from "react-icons/pi";

export default function Header() {
   return (
      <>
         <header className="w-full h-[80px]">
            <nav className="flex flex-row justify-evenly gap-120 items-center h-full">
               <div className="flex flex-row justify-center items-center gap-2 cursor-pointer text-xl">
                  {/* logo */}
                  <PiAirplaneInFlightFill className="w-auto h-10"/>
                  <h1>Magic Flight</h1>
               </div>

               <div>
                  <ul className="flex flex-row gap-10 text-xl" >
                     <li className="cursor-pointer"> teste1 </li>
                     <li className="cursor-pointer"> teste2 </li>
                     <li className="cursor-pointer"> teste3 </li>
                  </ul>
               </div>

               <div>
                  {/* botão */}
                  <button className="bg-black text-white h-12 w-50 rounded-4xl cursor-pointer text-xl">Login</button>
               </div>
            </nav>
         </header>
      </>
   )
}
