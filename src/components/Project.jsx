import React from "react";
import Icons from "./Icons";

function Project({ i, setModal, data }) {
  return (
    <section id="project">
      <div class="modal">
        <div class="modal-content">
          <span class="close" onClick={() => setModal()}>
            &times;
          </span>
          <h1>{data.name}</h1>
          <div className="content">
            <div className="text">
              <div className="discription">
                <h3>Discription</h3>
                <p>{data.description}</p>
              </div>
              <div className="tech">
                <h3>Tools Technology</h3>
                <div className="tech-icons">
                  {data.tech.map((e) => (
                    <Icons name={e} />
                  ))}
                </div>
              </div>
            </div>

            <a href={data.url} aria-hidden target="_blank">
              <div className="project-item" key={data.name}>
                <div className="item-wrap">
                  <img src={`${data.imgurl}`} className="item-img" />
                  <div className="overlay">
                    <div className="project-item-meta">
                      <button>Click to open Web App</button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
