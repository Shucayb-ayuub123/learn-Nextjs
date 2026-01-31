import React from "react";
import "./style.css";
const Dashboardlayout = ({
  children,
  User,
  Revenue,
  Notification,
  login,
}: {
  children: React.ReactNode;
  User: React.ReactNode;
  Revenue: React.ReactNode;
  Notification: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLogging = false ;
  return isLogging ? (
    <div>
      {children}

      <div className="flex">
        <div className="flex-col">
          <div>{User}</div>
          <div>{Revenue}</div>
        </div>

        <div>{Notification}</div>
      </div>
    </div>
  ) : (
     login 
  );
};

export default Dashboardlayout;
