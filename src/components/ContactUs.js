import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <div className="main">
          <div className="row section-head">
            <div className="ten columns">
              <p>contact</p>
            </div>
          </div>
          <div className="row">
            <aside className="">
              <div className="">
                <h4>
                  <a href="">
                    <i className="fa fa-linkedin-square"> </i>
                    <span> Mohammed Imtiyaz</span>{" "}
                  </a>
                </h4>
                <h4>
                  <a href="">
                    <i className="fa fa-envelope"> </i>
                    <span>mohammedimtiyaz.jk@yahoo.com</span>{" "}
                  </a>
                </h4>
                <h4>
                  <a href="">
                    <i className="fa fa-phone"> </i>
                    <span> +91 8197197997</span>
                  </a>
                </h4>

                <h4>
                  <a
                    href="https://github.com/mohammedimtiyaz-1/ "
                    target="_blank"
                  >
                    <i className="fa fa-github"> </i>
                    <span> Github </span>
                  </a>
                </h4>
                <h4>
                  <a
                    href="https://github.com/mohammedimtiyaz-1/ "
                    target="_blank"
                  >
                    <i className="fa fa-twitter"> </i>
                    <span> Twitter </span>
                  </a>
                </h4>
              </div>
            </aside>
          </div>
        </div>
        <div
          class="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="mohammedimtiyaz-01"
          data-version="v1"
        />
      </section>
    );
  }
}
