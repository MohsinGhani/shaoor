import React from "react";
import CommonHeader from "./header";
import CommonFooter from "./footer";

import NewsSection from "./newsSection";
import SeeSection from "./seeSection";
import LearningSection from "./learningSection";
import ListenSection from "./listenSection";

const LandingPage = () => {
  return (
    <>
      <CommonHeader />
      <NewsSection />
      <SeeSection />
      <LearningSection />
      <ListenSection />
      <CommonFooter />
    </>
  );
};

export default LandingPage;
