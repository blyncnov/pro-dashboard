import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { useDispatch, useSelector } from "react-redux";

import { FaTimes, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";

import DoughnutChart from "../../dashboard/utils/DoughnutChart";
// import BarChart from "../../dashboard/utils/BarChart";

const style = {
  fontSize: "1.5em",
};

const Home = () => {
  const [Moments, setMoments] = useState("");
  const [value, setValue] = React.useState("Good Morning Taiwo");

  const { speak } = useSpeechSynthesis();

  const dispatch = useDispatch();
  const isShowBanner = useSelector(
    (state) => state.navigationReducer.isShowBanner
  );

  const closeBannerSlideHandler = () => {
    dispatch({
      type: "OPEN__GREETING__BANNER",
    });
  };

  const speakHandler = () => {
    return speak({ text: value });
  };

  const getMoment = () => {
    let today = new Date();
    let time = today.getHours();

    if (time < 12) {
      return setMoments("Morning");
    } else if (time < 18) {
      return setMoments("Afternoon");
    } else {
      return setMoments("Evening");
    }
  };

  useEffect(() => {
    speakHandler();
    getMoment();
  }, []);

  return (
    <>
      <div
        onClick={() => speak({ text: "Good Morning Taiwo" })}
        className={
          isShowBanner ? "home-welcome-box" : "home-welcome-box close-slide"
        }
      >
        <div>
          <div className="home-greeting-text">
            <h2>Good {Moments} Taiwo !</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              praesentium quod aut.
            </p>
          </div>
          <div className="home-cancel" onClick={closeBannerSlideHandler}>
            <h1>
              <FaTimes />
            </h1>
          </div>
        </div>
      </div>

      <div className="home-container-grid">
        <div className="First">
          <div className="home-container-grid-card">
            <div className="widget-box">
              <div className="widget-icon">
                <h1>
                  <MdAccountBalanceWallet style={style} />
                </h1>
              </div>
              <div className="widget-text">
                <h4>Balance</h4>
                <h1> NGN 11,300</h1>
              </div>
            </div>
            <div className="widget-box">
              <div className="widget-icon">
                <h1>
                  <TbReportMoney style={style} />
                </h1>
              </div>
              <div className="widget-text">
                <h4>Income</h4>
                <h1> NGN 1,140</h1>
              </div>
            </div>
            <div className="widget-box">
              <div className="widget-icon">
                <h1>
                  <FaRegMoneyBillAlt style={style} />
                </h1>
              </div>
              <div className="widget-text">
                <h4>Expenses</h4>
                <h1> NGN 7,140</h1>
              </div>
            </div>
          </div>
          <br />
          <div className="home-chart-container-grid">
            <div className="widget-chart-box">
              <div className="widget-chart-box-text">
                <h4>Transactions Statistics</h4>
                <p>Transactions in the last 12 weeks</p>
              </div>
              <DoughnutChart />
            </div>
            <div className="widget-chart-box">
              <div className="widget-chart-box-text">
                <h4>Transactions Lists</h4>
                <p>Transactions in the last 12 weeks</p>
                <div className="transactions-box-container-grid">
                  <div className="transactions-box-card">
                    <div className="transactions-date">
                      <p>09</p>
                    </div>
                    <h6>Transfer to Taiwo Boluwatife from GTBank</h6>
                  </div>
                  <div className="transactions-box-card">
                    <div className="transactions-date">
                      <p>07</p>
                    </div>
                    <h6>Transfer to Taiwo Boluwatife from GTBank</h6>
                  </div>
                  <div className="transactions-box-card">
                    <div className="transactions-date">
                      <p>06</p>
                    </div>
                    <h6>Transfer to Taiwo Boluwatife from GTBank</h6>
                  </div>
                  <div className="transactions-box-card">
                    <div className="transactions-date">
                      <p>05</p>
                    </div>
                    <h6>Transfer to Taiwo Boluwatife from GTBank</h6>
                  </div>
                  <div className="transactions-box-card">
                    <div className="transactions-date">
                      <p>02</p>
                    </div>
                    <h6>Transfer to Taiwo Boluwatife from GTBank</h6>
                  </div>
                  <div className="transactions-box-card">
                    <div className="transactions-date">
                      <p>01</p>
                    </div>
                    <h6>Transfer to Taiwo Boluwatife from GTBank</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-profile-card">
          <div>
            <div className="profile-image-container"></div>
            <div className="profile-information-card">
              <h1>Taiwo Boluwatife </h1>
              <p>Web Developer</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure,
              dolores nostrum .
            </p>
            <div className="home-container-grid-card-slots">
              <div className="slot-card">
                <h4>Buy Airtime/Data</h4>
              </div>
              <div className="slot-card">
                <h4>Transfers</h4>
              </div>
              <div className="slot-card">
                <h4>Pay utility</h4>
              </div>
              <div className="slot-card">
                <h4>Invest</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
