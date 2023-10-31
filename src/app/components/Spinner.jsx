import React from "react";

const Spinner = () => {
  return (
    <div className="w-screen h-screen grid place-content-center relative -top-10 left-0">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black dark:border-violet-400"></div>
    </div>
  );
};

export default Spinner;
