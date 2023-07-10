import React from "react";
import CommonHeader from "./header";
import CommonFooter from "./footer";

import NewsSection from "./newsSection";
import SeeSection from "./seeSection";
import LearningSection from "./learningSection";

const LandingPage = () => {
  return (
    <>
      <CommonHeader />
      <NewsSection />
      <SeeSection />
      <LearningSection />
      <CommonFooter />
    </>
  );
};

export default LandingPage;
