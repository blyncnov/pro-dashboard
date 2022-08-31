import React from "react";
import { useDispatch } from "react-redux";

import { FaBars } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";

const style = { fontSize: "1.3em" };

const ToNavigation = () => {
  const dispatch = useDispatch();

  const IsClickedHandler = () => {
    dispatch({
      type: "OPEN__SIDE__NAVIGATION",
    });
  };

  return (
    <section>
      <div className="top-navigation-container">
        <div>
          <div className="top-mobile" onClick={IsClickedHandler}>
            <FaBars style={style} />
          </div>
          <h4>DevSave Home</h4>
        </div>
        <div className="top-right">
          <div className="icon">
            <IoNotifications style={style} />
          </div>
          {/* <div className="icon">
            <AiFillSetting style={style} />
          </div> */}
          <div className="top-profile">
            <h4>Blyncnov</h4>
            <div className="top-navigation-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToNavigation;
