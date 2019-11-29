import React from "react";

export default class Homepage extends React.Component {
  render() {
    let styles = { width: "420px" };
    return (
      <div className="Homepage">
        <img
          style={styles}
          src="https://solarsystem.nasa.gov/system/news_items/main_images/853_ph3_waxing_gibbous_2k.jpg"
          alt="sfdghj"
        />
      </div>
    );
  }
}
