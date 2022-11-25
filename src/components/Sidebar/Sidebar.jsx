import React, { useEffect, useState } from "react";
import Content from "../Content/Content";
import Header from "../Header/Header";

import "./sidebar.css";
export default function Sidebar() {
  const [closeClass, setCloseClass] = useState("");
  useEffect(() => {
    const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
    searchBtn.addEventListener("click", () => {
      sidebar.classList.remove("close");
    });
    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        console.log(123);
        modeText.innerText = "Light mode";
      } else {
        modeText.innerText = "Dark mode";
      }
    });
  }, []);

  const handleToggle = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("close")) {
      setCloseClass("");
    } else {
      setCloseClass("close");
    }
  };
  return (
    <div>
      <Header />
      <div className="content">
        <nav className={`sidebar ${closeClass}`}>
          <header>
            <div className="image-text">
              <span className="image">
                <img src="./img/logo.svg" alt="#" />
              </span>
              <div className="text logo-text">
                <span className="name">IPTC</span>
                <span className="profession">Khang Đtrai </span>
              </div>
            </div>
            <i className="bx bx-chevron-right toggle" onClick={handleToggle} />
          </header>
          <div className="menu-bar">
            <div className="menu">
              <li className="search-box">
                <i className="bx bx-search icon" />
                <input type="text" placeholder="Search..." />
              </li>
              <ul className="menu-links">
                <li id="dashboard" className="nav-link">
                  <a href="#">
                    <i className="bx bx-home-alt icon" />
                    <span className="text nav-text">Dashboard</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-bar-chart-alt-2 icon" />
                    <span className="text nav-text">Revenue</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-bell icon" />
                    <span className="text nav-text">Notifications</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-pie-chart-alt icon" />
                    <span className="text nav-text">Analytics</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-heart icon" />
                    <span className="text nav-text">Likes</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-wallet icon" />
                    <span className="text nav-text">Wallets</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-content">
              <li id="logout">
                <a href="#">
                  <i className="bx bx-log-out icon" />
                  <span className="text nav-text">Logout</span>
                </a>
              </li>
              <li className="mode">
                <div className="sun-moon">
                  <i className="bx bx-moon icon moon" />
                  <i className="bx bx-sun icon sun" />
                </div>
                <span className="mode-text text">Dark mode</span>
                <div className="toggle-switch">
                  <span className="switch" />
                </div>
              </li>
            </div>
          </div>
        </nav>
        <Content />
        <div className="content-right">
          <div className="anounce box">
            <div className="pb10">
              <i className="bx bxs-notepad" />
              <span>Thông báo</span>
            </div>
            <div>
              <a href="#">
                <i className="bx bxs-circle" />
                Lịch thi học kỳ I 2022 - 2023
              </a>
            </div>
            <div>
              <a href="#">
                <i className="bx bxs-circle" />
                Lịch họp phụ huynh học kỳ I 2022 - 2023
              </a>
            </div>
            {/*  */}
            <div className="pt10 pb10">
              <i className="bx bxs-help-circle" />
              <span>Trợ giúp</span>
            </div>
            <div>
              <a href="#">
                <i className="bx bxs-circle" />
                Cần giúp đỡ?
              </a>
            </div>
            <div>
              <a href="#">
                <i className="bx bxs-circle" />
                Tư vấn tuyển sinh
              </a>
            </div>
            <div>
              <a href="#">
                <i className="bx bxs-circle" />
                Thông tin về nhà trường
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
