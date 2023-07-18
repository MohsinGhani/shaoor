import { Button, Divider, Input, Tabs } from "antd";
import React from "react";
import BlogSide from "../components/blogs/blogSide";
import CommonCord from "../components/commonCord";
import TopSection from "../components/magazineCard/topSection";
import MagazineC from "../components/magazineCard/magazineC";
import Heading from "../components/heading";
// import Search from "antd/es/transfer/search";
import data from "../shared/data.json";
import { useRouter } from "next/navigation";
import CommonHeader from "@/components/header";
import CommonFooter from "@/components/footer";
const { Search } = Input;
const Islam = () => {
  const router = useRouter();
  return (
    <>
      {/* <CommonHeader /> */}
      <div className="max-w-[1280px] mx-auto">
        {/* <Heading title="ہیڈ لائنز" /> */}
        <div className="">
          {/* <div className="flex justify-between  max-lg:flex-col">
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
              <Button
                onClick={() => {
                  router.push("/Islam");
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
          </div> */}
          <Divider />

          <div className="flex flex-row justify-between">
            {/* <div className="w-[30%] bg-[#ffffff] overflow-scroll max-lg:hidden h-[3125px]">
              <BlogSide />
            </div> */}

            <div className="w-[70%] bg-[#ffffff] max-lg:w-full ">
              <div className="flex   justify-end max-md:flex-col-reverse !h-[380px] max-lg:!h-[485px]">
                <div className=" max-w-[1280px] sm:grid grid-rows-2 grid-flow-col flex-wrap">
                  {(data?.magazine || []).map((magazine: any) => (
                    <CommonCord
                      cardHeight="w-full  h-[150px] flex  flex-row-reverse max-lg:flex-col"
                      className="h-[270px] w-[68%]  max-lg:w-full "
                      imageSrc={magazine.image}
                      title={magazine.title}
                      topic={[]}
                      writer={magazine.writer}
                    />
                  ))}
                </div>
              </div>
              {/* <TopSection /> */}
              {/* <MagazineC /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <CommonFooter /> */}
    </>
  );
};

export default Islam;
