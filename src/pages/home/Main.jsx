import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {

  return (
    <main id="main" role="banner">
      <Outlet />
    </main>
  );
};

export default Main;