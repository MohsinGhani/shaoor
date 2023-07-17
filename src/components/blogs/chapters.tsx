import React from "react";
import CommonCord from "../commonCord";
import data from "../../shared/data.json";
import Heading from "../heading";

const Chapters = () => {
  return (
    <div className="flex flex-col ">
      <Heading title=" بلاگز" />
      <div className="flex flex-col ">
        {(data?.chapters || []).map((chapters: any) => (
          <CommonCord
            cardHeight="w-full h-[120px] flex  flex-row-reverse"
            className="!h-[80px] !w-[33%] ml-[5px]"
            imageSrc={chapters.image}
            title={chapters.title}
            topic={[]}
            writer=""
          />
        ))}
      </div>
    </div>
  );
};

export default Chapters;
