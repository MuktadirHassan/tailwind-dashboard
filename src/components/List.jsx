import * as ScrollArea from "@radix-ui/react-scroll-area";
import React from "react";
import "../index.css";

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const List = (Menus) => (
  <ScrollArea.Root className="ScrollAreaRoot">
    <ScrollArea.Viewport className="ScrollAreaViewport">
      <div style={{ padding: "15px 20px" }}>
        <div className="Text">Tags</div>
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
            <span className={`${!open && "hidden"} origin-left duration-200`}>
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
);

export default List;
