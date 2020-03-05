import React from "react";

import Header from "./Header";
import HowItWorks from "./HowItWorks";
import MeetTheTeam from "./MeetTheTeam";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="App">
      <MainNavbar />
      <Header /> 
      <HowItWorks />
      <MeetTheTeam />
      <Footer />
    </div>
  );
}
