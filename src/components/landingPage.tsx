import React from "react";
import CommonHeader from "./header";
import CommonFooter from "./footer";

import NewsSection from "./newsSection";

const LandingPage = () => {
  return (
    <>
      <CommonHeader />
      <NewsSection />
      <CommonFooter />
    </>
  );
};

export default LandingPage;
