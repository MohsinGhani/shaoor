import React from "react";
type IProps = {
  title: string;
};

const Heading = ({ title }: IProps) => {
  return (
    <div className="flex justify-end w-full h-24 items-center pl-4 pr-4">
      <u className="underline-offset-[16px] text-[orange] ">
        <p className="font-bold text-[40px] text-[#004C9B]  ">{title}</p>
      </u>
    </div>
  );
};

export default Heading;
