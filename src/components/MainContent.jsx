import React from "react";

const MainContent = (states) => {
  // console.log("open main>>", states);
  const open = states.states.open;
  const setOpen = states.states.setOpen;
  // const [open, setOpen] = useState(true);
  return (
    <div className="">
      <div className="h-12 p-4 bg-sky-600 sticky top-0">
        <div>
          <img
            src="./src/assets/control.png"
            className={`absolute z-40 cursor-pointer left-0 top-3 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="ml-4">
          <h2>Main Content</h2>
        </div>
      </div>

      {/* card part */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-rows gap-2 my-2">
          <div>
            <div class="box-border h-40  w-50 p-4 border-4">01</div>
          </div>
          <div>
            <div class="box-border h-40  w-50 p-4 border-4">02</div>
          </div>
          <div>
            <div class="box-border h-40  w-50 p-4 border-4">03</div>
          </div>
          <div>
            <div class="box-border h-40  w-50 p-4 border-4">04</div>
          </div>
        </div>
      </div>
      {/* card part */}

      {/* info part */}
      <div>
        <div className="grid grid-cols-1 grid-flow-rows gap-4 my-4">
          <div class="box-border h-96  w-100 p-4 border-4">01</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-rows gap-4 my-4">
          <div class="box-border h-96  w-100 p-4 border-4">02</div>
          <div class="box-border h-96  w-100 p-4 border-4">03</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="box-border h-96  w-100 p-4 border-4">04</div>
          <div class="box-border h-96  w-100 p-4 border-4">05</div>
          <div class="box-border h-96  w-100 p-4 border-4">06</div>

          <div class="md:col-span-1 lg:col-span-2 box-border h-96  w-100 p-4 border-4">
            07
          </div>
          <div class="box-border h-96  w-100 p-4 border-4">08</div>

          <div class="box-border h-96  w-100 p-4 border-4">09</div>
          <div class="md:col-span-2 lg:col-span-2 box-border h-96  w-100 p-4 border-4">
            10
          </div>
        </div>
      </div>
      {/* info part */}
    </div>
  );
};

export default MainContent;
