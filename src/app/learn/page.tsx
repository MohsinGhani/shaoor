"use client";
import CommonFooter from "@/components/footer";
import CommonHeader from "@/components/header";
import { useRouter } from "next/navigation";
import data from "../../shared/data.json";
import React from "react";
import { Button, Divider, Input } from "antd";
import Heading from "@/components/heading";
import BlogSide from "@/components/blogs/blogSide";
import CommonCord from "@/components/commonCord";
import TopSection from "@/components/magazineCard/topSection";
import MagazineC from "@/components/magazineCard/magazineC";
import Islam from "@/components/islam";
import IslamTabCard from "@/components/islamTabCard";
import AlimEislam from "@/components/alimEislam";
// import IslamTabCard from "@/components/islamTabCard";
const { Search } = Input;
const Learn = () => {
  const router = useRouter();
  return (
    <div>
      <CommonHeader />
      <div className="max-w-[1280px] mx-auto">
        <Heading title="ہیڈ لائنز" />
        <div className="">
          <div className="flex justify-between  max-lg:flex-col">
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
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between active">
                پاکستان
              </Button>
              <Button className=" border-none text-[#adadadcc] text-[17px] justify-between">
                انڈیا
              </Button>
              <Button
                onClick={() => {
                  router.push("/tabs");
                }}
                className=" border-none text-[#adadadcc] text-[17px] justify-between"
              >
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
            <div className="w-[30%] bg-[#ffffff] overflow-scroll max-lg:hidden h-[3125px]">
              <BlogSide />
            </div>

            <div className="w-[70%] bg-[#ffffff] max-lg:w-full">
              <div className="flex   justify-end max-md:flex-col-reverse !h-[380px] max-lg:!h-[485px]">
                <div className=" max-w-[1280px] sm:grid grid-rows-2 grid-flow-col flex-wrap">
                  {(data?.islamTabCard || []).map((islamTabCard: any) => (
                    <IslamTabCard
                      cardHeight="w-full  h-[150px] flex  flex-row-reverse max-lg:flex-col"
                      className="h-[270px] w-[68%]  max-lg:w-full "
                      imageSrc=""
                      title={islamTabCard.title}
                      topic={[]}
                      writer={islamTabCard.writer}
                    />
                  ))}
                </div>
              </div>
              <AlimEislam />
            </div>
          </div>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default Learn;
