import React from "react";
import { useRouter } from "next/router";

import Home from "../components/dashboard/pages/Home";
import Transactions from "../components/dashboard/pages/Transactions";
import Wallet from "../components/dashboard/pages/Wallet";

const MainContent = () => {
  const router = useRouter();

  let Component;
  const routes = router.pathname;

  switch (routes) {
    case "/dashboard":
      Component = <Home />;
      break;
    case "/transactions":
      Component = <Transactions />;
    case "/wallet":
      Component = <Wallet />;
      break;
  }

  return (
    <div className="space">
      <div>{Component}</div>
    </div>
  );
};

export default MainContent;
