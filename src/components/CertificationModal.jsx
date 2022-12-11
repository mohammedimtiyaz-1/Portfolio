import React from "react";

function CertificationModal({ i, setModal, data }) {
  return (
    <section id="project">
      <div class="modal">
        <div class="modal-content">
          <span class="close" onClick={() => setModal()}>
            &times;
          </span>
          <h1>{data.name}</h1>
          <div className="content">
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

export default CertificationModal;
