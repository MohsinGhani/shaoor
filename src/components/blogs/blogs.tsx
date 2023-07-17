import React from "react";
import CommonCord from "../commonCord";
import data from "../../shared/data.json";
import Heading from "../heading";

const Blogs = () => {
  return (
    <div className="flex flex-col">
      <Heading title="   مزآمین" />
      <div className="flex flex-col ">
        {(data?.blogs || []).map((blogs: any) => (
          <CommonCord
            cardHeight="w-full h-[120px] flex  flex-row-reverse"
            className="!h-[80px] !w-[33%] ml-[5px]"
            imageSrc={blogs.image}
            title={blogs.title}
            topic={[]}
            writer=""
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
