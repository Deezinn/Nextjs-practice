import Image from "next/image";

export default function MicroCard() {
  return (
    <div className="w-full h-auto rounded-2xl space-y-5">
      {/* Tabs */}
      <div className="flex flex-row justify-evenly items-center">
        <div className="flex flex-col justify-between items-center">
          <h1>Subscribed</h1>
          <div className="w-1/2 h-1 bg-orange-300 rounded-2xl"></div>
        </div>
        <h1>Upcoming</h1>
        <h1>Possed</h1>
      </div>

      {/* Item 1 */}
      <div className="grid grid-cols-[2fr_1fr] w-full h-20 shadow-2xl rounded-2xl delay-150">
        <div className="flex flex-row gap-5 justify-baseline items-center text-start p-5">
          <div className="flex justify-center items-center bg-gray-200 w-10 h-10 rounded-xl">
            <h1>E</h1>
          </div>
          <div>
            <h1>Basic English</h1>
            <h1 className="text-gray-500">Verb to be</h1>
          </div>
        </div>
        <div className="flex justify-end items-center p-5">
          {/* círculo girando */}
          <div className="relative flex justify-center items-center w-10 h-10">
            <div
              className="absolute inset-0 rounded-full animate-spin"
              style={{
                background:
                  "conic-gradient(black 0% 50%, transparent 50% 100%)",
              }}
            />
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full z-10">
              <h1 className="text-gray-500 text-sm">50</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Item 2 */}
      <div className="grid grid-cols-[2fr_1fr] w-full h-20 hover:shadow-2xl rounded-2xl">
        <div className="flex flex-row gap-5 justify-baseline items-center text-start p-5">
          <div className="flex justify-center items-center bg-black w-10 h-10 rounded-xl">
            <h1 className="text-white">JS</h1>
          </div>
          <div>
            <h1>Node</h1>
            <h1 className="text-gray-500">ExpressJs</h1>
          </div>
        </div>
        <div className="flex justify-end items-center p-5">
          <div
            className="flex justify-center items-center w-10 h-10 rounded-full relative"
            style={{
              background: "conic-gradient(black 0% 70%, transparent 70% 100%)",
            }}
          >
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full z-10">
              <h1 className="text-gray-500 text-sm">70</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div className="grid grid-cols-[2fr_1fr] w-full h-20 hover:shadow-2xl rounded-2xl">
        <div className="flex flex-row gap-5 justify-baseline items-center text-start p-5">
          <div className="flex justify-center items-center bg-gray-200 w-10 h-10 rounded-xl">
            <h1 className="">S</h1>
          </div>
          <div>
            <h1>Html, css and Javascript</h1>
            <h1 className="text-gray-500">Class and Object</h1>
          </div>
        </div>
        <div className="flex justify-end items-center p-5">
          <div
            className="flex justify-center items-center w-10 h-10 rounded-full relative"
            style={{
              background: "conic-gradient(black 0% 25%, transparent 25% 100%)",
            }}
          >
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full z-10">
              <h1 className="text-gray-500 text-sm">25</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Item 4 */}
      <div className="grid grid-cols-[2fr_1fr] w-full h-20 hover:shadow-2xl rounded-2xl">
        <div className="flex flex-row gap-5 justify-baseline items-center text-start p-5">
          <div className="flex justify-center items-center bg-gray-200 w-10 h-10 rounded-xl">
            <h1>D</h1>
          </div>
          <div>
            <h1>Database</h1>
            <h1 className="text-gray-500">MySql</h1>
          </div>
        </div>
        <div className="flex justify-end items-center p-5">
          <div
            className="flex justify-center items-center w-10 h-10 rounded-full relative"
            style={{
              background: "conic-gradient(black 0% 90%, transparent 90% 100%)",
            }}
          >
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full z-10">
              <h1 className="text-gray-500 text-sm">90</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
