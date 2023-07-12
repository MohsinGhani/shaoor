import React from "react";
import Image from "next/image";
import CardFooter from "./cardFooter";

type IProps = {
  title: string;
  topic: string[];
  writer: string;
  imageSrc: string;
  className: string;
  cardHeight: string;
};

const CommonCord = ({
  title,
  topic,
  writer,
  imageSrc,
  className,
  cardHeight,
}: IProps) => {
  return (
    <div className={`w-full pl-[16px]  pr-[16px] ${cardHeight}`}>
      <Image
        // {`w-full h-44  object-cove${className}`}
        className={`w-full h-44  object-cover ${className}`}
        alt=""
        src={imageSrc}
        width={500}
        height={0}
      />

      <CardFooter title={title} topic={topic} writer={writer} />
    </div>
  );
};

export default CommonCord;
