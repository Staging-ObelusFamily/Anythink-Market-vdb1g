import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            type="input"
            id="search-box"
            onChange={({ target }) => {
              const title = target.value;
              if (title.length > 2) {
                props.onClickSearch(
                  title,
                  (page) => agent.Items.byTitle(title, page),
                  agent.Items.byTitle(title)
                );
              }
            }}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
