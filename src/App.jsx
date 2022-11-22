import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="h-screen flex">
      <div className="h-screen overflow-y-scroll overflow-x-hidden">
        <SideBar />
      </div>
      <div className="h-screen flex-1 overflow-y-scroll">
        <MainContent />
      </div>
    </div>
  );
}
