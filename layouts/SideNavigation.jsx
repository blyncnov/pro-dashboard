import React from "react";
import { useDispatch } from "react-redux";

import { TbCloudComputing } from "react-icons/tb";
import { AiOutlineHome, AiOutlineReconciliation } from "react-icons/ai";
import { GiFastArrow } from "react-icons/gi";
import { FiTrash } from "react-icons/fi";
import { FcDataBackup } from "react-icons/fc";
import { MdOutlineFolderShared } from "react-icons/md";

const style = {
  color: "#ffffff",
};

const SideNavigation = () => {
  const dispatch = useDispatch();

  const IsClickedHandler = () => {
    dispatch({
      type: "OPEN__SIDE__NAVIGATION",
    });
  };

  return (
    <>
      <div id="side-navigation-container">
        <div className="side-navigation-logo">
          <h2>DevSave inc.</h2>
        </div>
        <div className="side-navigation-list-item ">
          <div className="side-navigation-notify">
            <button>
              Version <span>beta</span>
            </button>
          </div>
          <div className="see">
            <ul className="side-navigation-items">
              <li onClick={IsClickedHandler}>
                <span>
                  <AiOutlineHome style={style} />
                </span>
                Dashboard
              </li>
              <li onClick={IsClickedHandler}>
                <span>
                  <TbCloudComputing style={style} />
                </span>
                Transactions
              </li>
              <li onClick={IsClickedHandler}>
                <span>
                  <MdOutlineFolderShared style={style} />
                </span>
                Wallets
              </li>
              <li onClick={IsClickedHandler}>
                <span>
                  <AiOutlineReconciliation style={style} />
                </span>
                Statistics
              </li>
              <li onClick={IsClickedHandler}>
                <span>
                  <GiFastArrow style={style} />
                </span>
                Report
              </li>
              <li onClick={IsClickedHandler}>
                <span>
                  <FiTrash style={style} />
                </span>
                Help Center
              </li>
              <li onClick={IsClickedHandler}>
                <span>
                  <FcDataBackup style={style} />
                </span>
                Account Settings
              </li>
            </ul>
          </div>
          <div className="side-footer-section" onClick={IsClickedHandler}>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;
