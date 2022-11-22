import React, { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={open ? "w-72" : "w-24"}>
      <div className="h-12 p-4 bg-sky-900 sticky top-0">
        <div className="relative">
          <h1>Top</h1>
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="absolute cursor-pointer rounded-full w-7 border-2 h-7 z-10 right-0 top-8"
          >
            <img src="../assets/images/control.png" alt="" className="" />
          </div>
        </div>
      </div>

      <div>
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
      <div className="h-12 p-4 bg-sky-900 sticky bottom-0">
        <h1>Bottom</h1>
      </div>
    </div>
  );
};

export default SideBar;
