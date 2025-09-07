import { CgMenuGridO } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
export default function NavBar() {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center p-x-2 py-5">
        <div className="w-full h-auto flex flex-row gap-5 justify-start px-6 items-center">
          <div className="flex w-15 h-13 bg-gray-300 rounded-2xl justify-center items-center cursor-pointer">
            <CgMenuGridO className="text-3xl opacity-70" />
          </div>
          <div className="flex w-30 h-13 bg-white rounded-2xl justify-center items-center cursor-pointer">
            <h1>Create</h1>
          </div>
          <div className="flex w-40 h-13 bg-gray-300 rounded-2xl justify-center items-center cursor-pointer">
            <select name="favourites" id="favourites" className="cursor-pointer">
              <option value="">Favourites</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
          <div className="flex w-35 h-13 bg-gray-300 rounded-2xl justify-center items-center cursor-pointer">
            <select name="favourites" id="favourites" className="cursor-pointer">
              <option value="">Spaces</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
          <div className="flex flex-row w-80 h-13 bg-gray-300 rounded-2xl justify-start items-center p-2 gap-2">
              <CiSearch className="text-3xl"/>
              <input type="text" className="w-full h-10 outline-none focus:outline-none text-gray-600" placeholder="Search or ask a question"/>
          </div>
        </div>
      </div>
    </>
  )
}
