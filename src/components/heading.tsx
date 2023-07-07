import React from "react";

const Heading = ({ title }: any) => {
  return (
    <div className="flex justify-end w-[90%] h-32 items-center">
      <u className="underline-offset-8 text-[orange]">
        <p className="font-bold text-[40px] text-[#004C9B] ">{title}</p>
      </u>
    </div>
  );
};

export default Heading;
