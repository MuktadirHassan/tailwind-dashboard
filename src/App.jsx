import { useState } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen flex">
      <div className={`h-screen overflow-y-hidden`}>
        <SideBar states={{ open, setOpen }} />
      </div>
      <div className="h-screen flex-1 overflow-y-scroll">
        <MainContent states={{ open, setOpen }} />
      </div>
    </div>
  );
}
