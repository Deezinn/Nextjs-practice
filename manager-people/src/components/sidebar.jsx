import { firstGridElements, secondGridElements, thirdGridElements } from "@/constants/sidebarConstant"


export default function Sidebar() {
  return (
    <>
      <div className="w-full h-auto">
        <div className='w-full h-auto grid grid-rows-[2fr_2fr_2fr] gap-5'>
          <div className="w-full h-auto flex flex-col gap-1">
            {
              firstGridElements.map((values, key) => (
                <div key={key} className="w-full h-auto flex flex-row items-center gap-x-3 text-gray-700 text-xl hover:bg-white p-2 rounded-md">
                  <div className="">
                    {values.icon}
                  </div>
                  <div className="">
                    {values.text}
                  </div>
                </div>
              ))
            }
            <hr className="text-gray-300" />
          </div>
          <div className="w-full h-auto flex flex-col gap-1">
            {
              secondGridElements.map((values, key) => (
                <div key={key} className="w-full h-auto flex flex-row items-center gap-x-3 text-gray-700 text-xl hover:bg-white p-2 rounded-md">
                  <div className="">
                    {values.icon}
                  </div>
                  <div>
                    {values.text === "Analytics" || values.text === "Experience" ? (
                      <select name={values.text.toLocaleLowerCase()} id={values.text.toLocaleLowerCase()}>
                        <option value="">{values.text}</option>
                        {values.dropdown?.map((opt, index) =>(
                          <option key={index} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : values.text}
                  </div>
                </div>
              ))
            }
            <hr className="text-gray-300" />
          </div>
          <div className="w-full h-auto flex flex-col gap-1">
            {
              thirdGridElements.map((values, key) => (
                <div key={key} className="w-full h-auto flex flex-row items-center gap-x-3 text-gray-700 text-xl hover:bg-white p-2 rounded-md">
                  <div className="">
                    {values.icon}
                  </div>
                  <div className="">
                    {values.text}
                  </div>
                </div>
              ))
            }
            <hr className="text-gray-300" />
          </div>
        </div>
      </div>
    </>
  )
}
