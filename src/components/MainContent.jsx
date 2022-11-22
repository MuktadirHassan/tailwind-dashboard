import React from "react";

const MainContent = () => {
  return (
    <div className="">
      <div className="h-12 p-4 bg-sky-600 sticky top-0">
        <h2>Main Content</h2>
      </div>
      {/* card part */}
      <div>
        <div className="grid grid-cols-4 grid-flow-rows gap-2 my-2">
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
        <div className="grid grid-cols-2 grid-flow-rows gap-4 my-4">
          <div class="box-border h-96  w-100 p-4 border-4">01</div>
          <div class="box-border h-96  w-100 p-4 border-4">02</div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 box-border h-96  w-100 p-4 border-4">03</div>
          <div class="box-border h-96  w-100 p-4 border-4">04</div>

          <div class="box-border h-96  w-100 p-4 border-4">05</div>
          <div class="box-border h-96  w-100 p-4 border-4">06</div>
          <div class="box-border h-96  w-100 p-4 border-4">07</div>

          <div class="box-border h-96  w-100 p-4 border-4">08</div>
          <div class="col-span-2 box-border h-96  w-100 p-4 border-4">09</div>
        </div>

        <div className="grid grid-cols-2 grid-flow-rows gap-4 my-4">
          <div class="box-border h-96  w-100 p-4 border-4">10</div>
          <div class="box-border h-96  w-100 p-4 border-4">11</div>
        </div>
      </div>
      {/* info part */}
    </div>
  );
};

export default MainContent;
