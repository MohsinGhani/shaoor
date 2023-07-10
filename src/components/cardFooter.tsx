import React from "react";
import Image from "next/image";
type IProps = {
  title: string;
  topic: string[];
  writer: string;
};

const CardFooter = ({ title, topic, writer }: IProps) => {
  return (
    <div className="leading-8 max-sm:mt-[13px]">
      <p className="text-right  text-[20px] text-[#004C9B] font-bold ">
        {title}
      </p>
      <p className="text-right  font-bold text-[20px] text-[#1b1b1b]">
        {topic}
      </p>
      <p className="text-right  text-[17px]  font-bold text-[#929292]">
        {writer}
      </p>
    </div>
  );
};

export default CardFooter;
