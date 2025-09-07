import { CiSearch } from "react-icons/ci";
import { FaUsersGear } from "react-icons/fa6";
export default function Home() {

  return (
    <>
      <div className="w-full h-full grid grid-rows-[0.1fr_0.3fr_1fr]">
        <div className="flex flex-row gap-5">
          <select name="" id="">
            <option value="">Default</option>
          </select>
          {/* Adicionar o FaGear como dropdown depois */}
        </div>
        <div className="w-full h-auto flex flex-col gap-5">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">User Profiles</h1>
            <p className="text-md opacity-70">A list of all your users, Yoou can search for and dive into their specific properties</p>
          </div>
          <div className="w-full h-auto flex flex-row gap-10">
            <div className="flex flex-row w-80 h-13 border-1 border-gray-200 rounded-md justify-start items-center p-2 gap-2">
              <CiSearch className="text-3xl" />
              <input type="text" className="w-full h-10 outline-none focus:outline-none" placeholder="Search user or device IDs" />
            </div>
            <div className="flex flex-row w-80 h-13  rounded-md justify-start items-center p-2 gap-2">
              <FaUsersGear className="text-xl" />
              <h1>Advanced search</h1>
            </div>
          </div>
        </div>
        <div className="bg-blue-300">Última linha ocupando o resto</div>
      </div>
    </>
  );
}
