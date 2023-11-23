import React, { Component } from "react";
import Icons from "./Icons";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="two columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="ten columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item" key={item.CGPA}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span> &bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>CGPA: {item.CGPA}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="tow columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="ten columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item" key={item.Achievements}>
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {`${item.join} - ${item.leave}`}
                        </em>
                      </p>

                      <div style={{ fontSize: "18px" }}>
                        <div>
                          <ol style={{ paddingLeft: "3rem" }}>
                            {item.Achievements.map((e) => (
                              <p>{e}</p>
                            ))}
                          </ol>
                        </div>
                        <div className="tech">
                          Tech Stack :{" "}
                          {item.tech.map((t) => (
                            <Icons name={t} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
