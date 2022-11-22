import React, { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  // return (
  // <div className={open ? "w-72" : "w-20"}>
  //   <div className="h-12 p-4 bg-sky-900 sticky top-0">
  //     <div className="relative">
  //       <h1>Top</h1>
  //       <div className="absolute cursor-pointer rounded-full w-7 border-2 h-7 z-10 right-0 top-8">
  //         <img src="../assets/images/control.png" alt="" className="" />
  //       </div>
  //     </div>
  //   </div>
  //   <div className="h-12 p-4 bg-sky-900 sticky bottom-0">
  //     <h1>Bottom</h1>
  //   </div>
  // </div>;
  // );

  return (
    <div className="h-screen">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } bg-dark-purple h-screen relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute z-40 cursor-pointer -right-3 top-6 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center h-12 p-4 bg-sky-900 sticky top-0">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Side Bar
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img
                // className={`${!open && "hidden"}`}
                src={`./src/assets/${Menu.src}.png`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`h-12 text-white origin-left font-medium text-xl  bg-sky-900 sticky bottom-0 ${
          !open && "scale-0"
        }`}
      >
        <h1>Bottom</h1>
      </div>
    </div>
  );
};

export default SideBar;
