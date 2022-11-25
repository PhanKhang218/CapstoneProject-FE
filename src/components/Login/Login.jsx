import React from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { getUser } from "./../../helpers/getUser";
import "./login.css";
export default function Login(props) {
  let navigate = useNavigate();
  const alert = useAlert();
  const handleSubmit = (e) => {
    const UserName = document.querySelector("#UserName").value;
    const password = document.querySelector("#password").value;
    e.preventDefault();
    const users = getUser();
    const user = users.find((user) => user.UserName === UserName);
    if (!user) {
      alert.error("Username is wrong, please enter again !!!");
    } else {
      const checkPassword = user.PassWord === password;
      if (!checkPassword) {
        alert.error("Password is wrong, please enter again !!!");
      } else {
        alert.success("Login success!");
        return navigate("/layout");
      }
    }
  };
  return (
    <div>
      <div className="container">
        <div className="header-login">
          <div className="header-left">
            <div className="logo">
              <img src="./img/logo.svg" alt="#" />
              <span className="title-header">IPTC</span>
            </div>
          </div>
          <div className="header-right">
            <button type="click">
              <img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bb3cefe8-bcf2-4173-9ad5-8e7aa3dd0664/1c4b9433-f3c9-4b80-a813-1ee4fa514311?org_if_sml=1870" />
              <span className="register">Register</span>
            </button>
            <button className="button-login">
              <span className="login">Login</span>
            </button>
          </div>
        </div>
        <div className="content-login">
          <div className="content-left-login">
            <form className="form" id="form-1">
              <img src="./img/join.svg" alt="" />
              <h3 className="heading">WELCOME</h3>
              <div className="spacer" />
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="UserName"
                  name="email"
                  type="text"
                  placeholder="VD: abc@gmail.com"
                  className="form-control"
                />
                <span className="form-message" />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Mật khẩu
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  className="form-control"
                />
                <span className="form-message" />
              </div>
              <a href="#" className="forget-pass">
                Quên mật khẩu
              </a>
              <button
                onClick={handleSubmit}
                className="form-submit"
                id="login-btn"
              >
                Đăng nhập
              </button>
            </form>
          </div>
          <div className="content-right-login">
            <img src="./img/img-large.png" alt="#" srcSet />
          </div>
        </div>
        <div className="footer" />
      </div>
    </div>
  );
}
