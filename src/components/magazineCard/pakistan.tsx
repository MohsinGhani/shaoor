import React from "react";
import Heading from "../heading";

import CommonCord from "../commonCord";
import data from "../../shared/data.json";
import Slider from "react-slick";
import { Grid } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const Pakistan = () => {
  const meriSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="slider-arrow slider-arrow-next absolute bottom-2 left-4 cursor-pointer bg-[#eba21a] rounded-[100%] p-2 border-none z-10 text-black"
      onClick={() => {
        console.log("clicking");
        onClick();
      }}
    >
      <LeftOutlined rev={"sg"} />
    </button>
  );

  const CustomNextArrow = ({ onClick }: any) => (
    <button
      className="slider-arrow slider-arrow-prev absolute right-4 bottom-2  cursor-pointer border-none rounded-[100%]  bg-[#eba21a]  p-2 text-black"
      onClick={onClick}
    >
      <RightOutlined rev={"edg"} />
    </button>
  );

  const { useBreakpoint } = Grid;

  const screen = useBreakpoint();

  return (
    <>
      <div className="max-w-[1280px] mx-auto ">
        <Heading title="  پاکستان " />

        {!screen.md ? (
          <Slider
            {...meriSettings}
            className="  max-md:h-[400px]  "
            prevArrow={<CustomPrevArrow className="font-bold bg-[#751d1d]" />}
            nextArrow={<CustomNextArrow className="font-bold bg-[#d12e2e]" />}
          >
            {(data?.pakistan || []).map((pakistan) => (
              <CommonCord
                cardHeight=""
                className=""
                imageSrc={pakistan.image}
                title={pakistan.title}
                topic={pakistan.topics}
                writer={pakistan.writer}
              />
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center max-md:flex-col-reverse  ">
            <div className=" max-w-[1280px] sm:grid grid-rows-2 grid-flow-col flex-wrap ">
              {(data?.pakistan || []).map((pakistan) => (
                <CommonCord
                  cardHeight="w-[224px]"
                  className="h-[8rem]"
                  imageSrc={pakistan.image}
                  title={pakistan.title}
                  topic={pakistan.topics}
                  writer={pakistan.writer}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Pakistan;
