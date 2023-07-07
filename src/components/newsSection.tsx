import React from "react";
import Heading from "./heading";
import CommonMainCard from "./commonMainCard";
import CommonCord from "./commonCord";
import data from "../shared/data.json";
const NewsSection = () => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto ">
        <Heading title="تزاترین" />
        <div className="flex justify-between">
          <CommonMainCard
            imageSrc={"/assets/images/height.jpg"}
            title={"رسالت / ختم نبوت"}
            topic={"اقلیتوں کے ساتھ سلوک کا معاملہ "}
            creatorName={" عامر خاقوانی"}
          />

          <div className=" gap-4 max-w-[920px] grid grid-rows-2 grid-flow-col ">
            {(data?.news || []).map((news) => (
              <CommonCord
                imageSrc={news.image}
                title={news.title}
                topic={news.topics[0]}
                writer={news.writer}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
