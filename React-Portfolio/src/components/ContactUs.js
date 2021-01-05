import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead" style={{ fontWeight: "bold" }}>
              C O N T A C T
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <i className="fa fa-linkedin-square"> </i>
                <span> Mohammed Imtiyaz</span>
              </h4>
              <h4>
                <i className="fa fa-envelope"> </i>
                <span> mohammedimtiyaz.jk@gamil.com</span>
              </h4>
              <h4>
                <i className="fa fa-phone"> </i>
                <span> +91 8197197997</span>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
