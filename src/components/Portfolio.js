import React, { Component } from "react";
import Project from "./Project";
export default class Porfolio extends Component {
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
      <>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {resumeData.portfolio &&
                  resumeData.portfolio.map((item, i) => {
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
          <Project i={modal} data={data} setModal={this.setModal} />
        )}
      </>
    );
  }
}
