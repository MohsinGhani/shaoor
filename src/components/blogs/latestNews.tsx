import React from "react";
import CommonCord from "../commonCord";
import data from "../../shared/data.json";
import Heading from "../heading";

const LatestNews = () => {
  return (
    <div className="flex flex-col">
      <Heading title="   تازه ترین خبریں" />
      <div className="flex flex-col ">
        {(data?.latestNews || []).map((latestNews: any) => (
          <CommonCord
            cardHeight="w-full h-[120px] flex  flex-row-reverse "
            className="!h-[80px] !w-[33%] ml-[5px]"
            imageSrc={latestNews.image}
            title={latestNews.title}
            topic={[]}
            writer=""
          />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
