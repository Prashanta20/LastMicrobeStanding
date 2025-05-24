import { useState } from "react";

function Navbar() {
  //const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  const buttonClasses =
    "text-gray-100 hover: cursor-pointer font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300";
  const buttons = (
    <>
      <button className={buttonClasses}>Rules</button>
      <button className={buttonClasses}>Spinner</button>
      <button className={buttonClasses}>Language</button>
    </>
  );

  return (
    <nav className="fixed w-full bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full flex-row justify-between">
            <div className="text-xl font-bold">Last Microbe Standing</div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {buttons}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              type="button"
              className="fill-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-y-2 px-4 pb-2 sm:px-6 md:hidden">
          {buttons}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
