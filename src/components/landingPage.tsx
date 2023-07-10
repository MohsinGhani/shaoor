import React from "react";
import CommonHeader from "./header";
import CommonFooter from "./footer";

import NewsSection from "./newsSection";
import SeeSection from "./seeSection";

const LandingPage = () => {
  return (
    <>
      <CommonHeader />
      <NewsSection />
      <SeeSection />
      <CommonFooter />
    </>
  );
};

export default LandingPage;
