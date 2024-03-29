import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Skills from "./components/SkillsNew";
import Certification from "./components/Certification";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        {/* <Testimonials resumeData={resumeData}/> */}
        <Certification resumeData={resumeData} />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
