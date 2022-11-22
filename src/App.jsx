import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="grid grid-cols-12 h-screen">
      {/* <div className="bg-slate-900 col-span-2">
        <div className="h-12 p-4 bg-sky-900 sticky top-0">
          <h1>Top</h1>
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
      </div> */}
      <div className="bg-slate-900 col-span-2">
        <SideBar />
      </div>

      <div className="bg-slate-600 col-span-10">Main Content</div>
    </div>
  );
}
