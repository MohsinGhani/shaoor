"use client";
import CommonCord from "@/components/commonCord";
import CommonFooter from "@/components/footer";
import CommonHeader from "@/components/header";
import Heading from "@/components/heading";
import { Button, Divider, Input } from "antd";
import data from "../../shared/data.json";

import React from "react";
import BlogSide from "@/components/blogs/blogSide";
import Pakistan from "@/components/magazineCard/pakistan";
import India from "@/components/magazineCard/india";
import MagazineC from "@/components/magazineCard/magazineC";
import TopSection from "@/components/magazineCard/topSection";
const { Search } = Input;
const Magazine = () => {
  return (
    <>
      <CommonHeader />
      <div className="max-w-[1280px] mx-auto">
        <Heading title="ہیڈ لائنز" />
        <div className="">
          <div className="flex justify-between ">
            <div className="w-1/3  max-lg:w-[90%]  flex items-center justify-center ">
              {" "}
              <Search size="large" placeholder="سرچ" className="text-end" />
            </div>
            <div className="flex flex-row-reverse">
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between">
                صفہ اول
              </Button>
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between">
                ہیڈلاینز
              </Button>
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between">
                پاکستان
              </Button>
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between">
                انڈیا
              </Button>
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between">
                عالم اسلام
              </Button>
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between">
                دنیا بھر سے
              </Button>
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between">
                مزآمین
              </Button>
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between">
                بلاگز
              </Button>
            </div>
          </div>
          <Divider />

          <div className="flex flex-row justify-between">
            <div className="w-[30%] bg-[#ffffff] overflow-scroll max-lg:hidden h-[2728px]">
              <BlogSide />
            </div>

            <div className="w-[70%] bg-[#ffffff] max-lg:w-full">
              <div className="flex   justify-end max-md:flex-col-reverse">
                <div className=" max-w-[1280px] sm:grid grid-rows-2 grid-flow-col flex-wrap">
                  {(data?.magazine || []).map((magazine: any) => (
                    <CommonCord
                      cardHeight="w-full  h-[150px] flex  flex-row-reverse"
                      className="h-[270px] !w-[68%] ml-[5px]"
                      imageSrc={magazine.image}
                      title={magazine.title}
                      topic={[]}
                      writer={magazine.writer}
                    />
                  ))}
                </div>
              </div>
              <TopSection />
              <MagazineC />
            </div>
          </div>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default Magazine;
