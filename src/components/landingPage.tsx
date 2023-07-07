import React from "react";
import CommonHeader from "./header";
import CommonFooter from "./footer";
import Heading from "./heading";
import CommonCord from "./commonCord";
import CommonMainCard from "./commonMainCard";

const LandingPage = () => {
  return (
    <>
      <CommonHeader />
      <Heading title="تزاترین" />
      <div className="flex justify-around ">
        <CommonMainCard />
        <CommonCord
          imageSrc={"/assets/images/HILmr.png"}
          title={"رسالت / ختم نبوت"}
          topic={"اقلیتوں کے ساتھ سلوک کا معاملہ "}
          creatorName={" عامر خاقوانی"}
        />
      </div>
      <CommonFooter />
    </>
  );
};

export default LandingPage;
