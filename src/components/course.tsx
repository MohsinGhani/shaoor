import React from "react";
import Heading from "./heading";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CommonCord from "./commonCord";
import Slider from "react-slick";
import data from "../shared/data.json";
import { Grid } from "antd";
const Course = () => {
  const meriSettings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="slider-arrow slider-arrow-next absolute bottom-2 left-4 cursor-pointer bg-[#eba21a] max-lg:bottom-[-112px] rounded-[100%] p-2 border-none z-10 text-black"
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
      className="slider-arrow slider-arrow-prev absolute right-4 bottom-2 cursor-pointer border-none rounded-[100%]  max-lg:bottom-[-112px] bg-[#eba21a]  p-2 text-black"
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
        <Heading title="کورسز " />

        {!screen.md ? (
          <div className="h-[521px]">
            <Slider
              {...meriSettings}
              className="  max-md:h-[400px]   "
              prevArrow={<CustomPrevArrow className="font-bold bg-[#751d1d]" />}
              nextArrow={<CustomNextArrow className="font-bold bg-[#d12e2e]" />}
            >
              {(data?.course || []).map((course) => (
                <CommonCord
                  cardHeight="max-sm: h-[470px]"
                  className="h-[69%]"
                  imageSrc={course.image}
                  title={course.title}
                  topic={course.topics}
                  writer={course.writer}
                />
              ))}
            </Slider>
          </div>
        ) : (
          <div className="flex justify-center max-md:flex-col-reverse  h-[570px]">
            <div className=" max-w-[1280px] sm:grid sm:w-full grid-rows-1 grid-flow-col flex-wrap ">
              {(data?.course || []).map((course) => (
                <CommonCord
                  cardHeight=""
                  className="h-[65%]"
                  imageSrc={course.image}
                  title={course.title}
                  topic={course.topics}
                  writer={course.writer}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Course;
