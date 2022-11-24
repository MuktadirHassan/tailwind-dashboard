import * as ScrollArea from "@radix-ui/react-scroll-area";
import React from "react";
import "../index.css";

const SideBar = (states) => {
  // console.log("open side bar>>", states);
  const open = states.states.open;
  let setOpen = states.states.setOpen;
  // const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "Chart_fill" },
    { title: "Title", src: "Chat" },
    { title: "Title 1", src: "User", gap: true },
    { title: "Title 2 ", src: "Calendar" },
    { title: "Title 3", src: "Search" },
    { title: "Title 4", src: "Chart" },
    { title: "Title 6 ", src: "Folder", gap: true },
    { title: "Title 7", src: "Setting" },
    { title: "Home", src: "Chart_fill" },
    { title: "Title", src: "Chat" },
    { title: "Title 1", src: "User", gap: true },
    { title: "Title 2 ", src: "Calendar" },
    { title: "Title 3", src: "Search" },
    { title: "Title 4", src: "Chart" },
    { title: "Title 6 ", src: "Folder", gap: true },
    { title: "Title 7", src: "Setting" },
    { title: "Home", src: "Chart_fill" },
    { title: "Title", src: "Chat" },
    { title: "Title 1", src: "User", gap: true },
    { title: "Title 2 ", src: "Calendar" },
    { title: "Title 3", src: "Search" },
    { title: "Title 4", src: "Chart" },
    { title: "Title 6 ", src: "Folder", gap: true },
    { title: "Title 7", src: "Setting" },
  ];

  // useEffect(() => {
  //   console.log("window.innerWidth>>", window.innerWidth);
  //   if (window.innerWidth <= 425) {
  //     setOpen(!open);
  //   }
  // }, [window.innerWidth]);
  window.onresize = function (event) {
    // console.log(event);
    if (window.innerWidth > 425) {
      setOpen(true);
    } else {
      // show menubar
      setOpen(false);
    }
  };

  return (
    <div className="h-screen">
      <div
        className={` ${
          open ? "w-72" : "w-0"
        } bg-dark-purple h-screen duration-300 sticky`}
      >
        {/* ------- Title part ------- */}
        <div
          className={`${
            !open && "hidden"
          }, flex gap-x-4 h-12 p-4 justify-between sticky bg-sky-900 top-0 `}
        >
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Side Bar
          </h1>
          {/* <img
            src="./src/assets/control.png"
            className={`absolute z-40 cursor-pointer right-0 top-3 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          /> */}
        </div>
        {/* ------- Title part ------- */}

        {/* ------- list part ------- */}
        {/* <List Menus={{ Menus }} /> */}
        <ScrollArea.Root className="ScrollAreaRoot">
          <ScrollArea.Viewport className="ScrollAreaViewport">
            <div style={{ padding: "15px 20px" }}>
              {Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
    ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                >
                  <img
                    // className={`${!open && "hidden"}`}
                    src={`./src/assets/${Menu.src}.png`}
                  />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              ))}
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="ScrollAreaScrollbar"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="ScrollAreaThumb" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar
            className="ScrollAreaScrollbar"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="ScrollAreaThumb" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="ScrollAreaCorner" />
        </ScrollArea.Root>

        {/* <div className="overflow-y-scroll h-[53rem]">
          <ul className="pt-4">
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
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div> */}

        {/* ------- list part ------- */}

        {/* ------- Bottom part ------- */}
        <div
          className={`h-12 text-white origin-left font-medium text-xl  bg-sky-900 fixed w-72 bottom-0 ${
            !open && "hidden"
          }`}
        >
          <h1>Bottom</h1>
        </div>
        {/* ------- Bottom part ------- */}
      </div>
    </div>
  );
};

export default SideBar;
