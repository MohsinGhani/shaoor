import React from "react";
import Image from "next/image";
import CardFooter from "./cardFooter";

type IProps = {
  title: string;
  topic: string[];
  writer: string;
  imageSrc: string;
};

const CommonCord = ({ title, topic, writer, imageSrc }: IProps) => {
  return (
    <div className="w-full pl-[16px]  pr-[16px] ">
      <Image
        className="w-full  h-44  object-cover"
        alt=""
        src={imageSrc}
        width={500}
        height={200}
      />

      <CardFooter title={title} topic={topic} writer={writer} />
    </div>
  );
};

export default CommonCord;
