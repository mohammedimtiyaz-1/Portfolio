import React, { Component } from "react";
import CertificationModal from "./CertificationModal";

export default class Certification extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: -1, data: {} };
    // this.setModal = this.setModal.bind(this);
  }
  setModal = () => {
    this.setState({ modal: -1, data: {} });
  };

  render() {
    let resumeData = this.props.resumeData;
    let modal = this.state.modal;
    let data = this.state.data;
    return (
      <div id="certifications">
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Certifications Under My Belt</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {resumeData.certification &&
                  resumeData.certification.map((item, i) => {
                    return (
                      <div
                        className="portfolio-item"
                        key={item.name}
                        onClick={() => this.setState({ modal: i, data: item })}
                      >
                        <div className="item-wrap">
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <div>
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                              </div>
                              <button>Click to View</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
        {modal !== -1 && (
          <CertificationModal i={modal} data={data} setModal={this.setModal} />
        )}
      </div>
    );
  }
}
