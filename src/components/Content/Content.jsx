import React, { useEffect, useState } from "react";

export default function Content() {
  const [users, setUser] = useState([]);
  return (
    <div className="forum-content">
      <div class="row">
        <form action="" method="POST" role="form">
          <legend>Form title</legend>

          <div class="form-group">
            <label for="">label</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Input field"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      {[1].map(function (user) {
        return (
          <div className="box">
            <div className="box-profile">
              <img
                className="box-img-avatar"
                src="./img/avatar.png"
                alt=""
                srcSet
              />
              <div className="box-info">
                <div className="box-user-top">
                  <h4 className="card-user-name">{user.name}</h4>
                  <i className="bx bxs-check-circle" />
                </div>
                <div className="box-user-desc">5 min ago</div>
              </div>
            </div>
            <div className="box-question">
              <div className="box-main-question">
                Mọi người giải thích giúp mình câu này được không ạ
              </div>
              <div className="box-subtitle">
                Mọi người giải thích giúp mình câu này được không ạ
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
