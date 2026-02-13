import React from "react";
import Sidebar from "../ui_Component/Sidebar/page";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-12/12 bg-[#f1f5f9] ml-3 p-4 h-screen">{children}</div>
    </div>
  );
};

export default layout;
