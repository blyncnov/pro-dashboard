import React from "react";

import { useSelector } from "react-redux";

import SideNavigation from "../../layouts/SideNavigation";
import TopNavigation from "../../layouts/TopNavigation";
import MainContent from "../../layouts/MainContent";

const Dashboard = () => {
  const isClicked = useSelector((state) => state.navigationReducer.isClicked);

  return (
    <>
      <section className="dashboard__layout">
        <div
          className={
            isClicked
              ? "dashboard__section side-navigation side-navigation-active"
              : "dashboard__section side-navigation"
          }
        >
          <SideNavigation />
        </div>
        <div className="dashboard__section top-navigation">
          <TopNavigation />
        </div>
        <div className="dashboard__section main-content">
          <MainContent />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
