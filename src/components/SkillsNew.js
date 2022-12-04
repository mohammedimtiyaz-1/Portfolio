/* eslint-disable no-unused-expressions */
import React from "react";
const srImage = "img/";
function SkillsNew({ resumeData }) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div>
        {resumeData.skills.map((e) => (
          <div className="skill">
            <img src={`${srImage + e.skillname.toLowerCase() + ".png"}`} />{" "}
            <b>{e.skillname}</b>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsNew;
