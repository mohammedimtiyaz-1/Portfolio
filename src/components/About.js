import React, { Component } from "react";
import srImage from "../../src/img/profilePic_Imtiyaz.jpg";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              style={{ width: "20rem", height: "20rem" }}
              className="profile-pic"
              src={srImage}
              alt="Profile Pic"
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
          </div>
        </div>
      </section>
    );
  }
}
