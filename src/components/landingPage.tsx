import React from "react";
import CommonHeader from "./header";
import CommonFooter from "./footer";

import NewsSection from "./newsSection";
import SeeSection from "./seeSection";
import LearningSection from "./learningSection";
import ListenSection from "./listenSection";
import Infographics from "./infographics";
import Course from "./course";
import Books from "./books";

const LandingPage = () => {
  return (
    <>
      <CommonHeader />
      <NewsSection />
      <SeeSection />
      <LearningSection />
      <ListenSection />
      <Infographics />
      {/* <Course />
      <Books /> */}
      <CommonFooter />
    </>
  );
};

export default LandingPage;
