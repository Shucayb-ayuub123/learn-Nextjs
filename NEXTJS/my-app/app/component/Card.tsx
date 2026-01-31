import React from "react";
import "./style.css";
const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-lg border-amber-300 border-3 h-23 space-y-20 gap-7 mr-3 m-5 rounded-xl">
      {children}
    </div>
  );
};

export default Card;
