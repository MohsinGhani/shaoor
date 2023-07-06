import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Divider, Input } from "antd";
import { Footer } from "antd/es/layout/layout";
import React from "react";

const CommonFooter = () => {
  return (
    <div className="w-full bg-[#004C9B]">
      <footer className="bg-[#004C9B] h-auto max-w-[1280px] flex justify-between items-center text-white mx-auto flex-col px-4">
        <div className="flex flex-col-reverse w-full items-center justify-between sm:flex-row  mt-[30px]  mb-[30px]">
          <div className="flex flex-col-reverse gap-[42px]  sx:flex-col sm:flex-row">
            <div className="items-end flex flex-col leading-9 text-[20px]">
              <p>تعارف</p>
              <p>رابتا</p>
              <p>مالی امداد</p>
              <p>رضاکار</p>
              <p> پرائیویسی پالیسی </p>
            </div>
            <div className="leading-9 ">
              <div className="flex mt-[30px] sm:mt-[0px] w-full ">
                <Button className="bg-[#eba21a] text-white">سبسکرائب</Button>
                <Input placeholder="Basic usage" className="ml-2" />
              </div>
              <p className="text-[14px] sm:flex">
                سبسکرائب کر کے آپ ہماری پرائیویسی پالیسی سے اتفاق کرتے ہیں۔
              </p>
              <div className=" flex flex-row gap-[12px] justify-end mt-12">
                <img
                  className="w-1/8 h-10  rounded-full bg-none items-center flex cursor-pointer"
                  src="/assets/images/insta.jpg"
                />
                <img
                  className="w-1/8 h-10  rounded-full bg-none items-center flex cursor-pointer"
                  src="/assets/images/YouTube.webp"
                />
                <img
                  className="w-1/8 h-10  rounded-full bg-none items-center flex cursor-pointer"
                  src="/assets/images/Twitter.png"
                />
                <img
                  className="w-1/8 h-10  rounded-full bg-white items-centerju flex cursor-pointer"
                  src="/assets/images/facebook.webp"
                />
              </div>
              <div className="flex flex-col mt-12">
                <p className="flex justify-end">Download shaoor app</p>
                <div className="flex justify-end">
                  <img
                    className="w-[50%] h-10 bg-none items-center flex mt-4"
                    src="/assets/images/app-store.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="leadng-loose">
            {" "}
            <div className="flex items-center justify-end">
              <Button
                className="text-white  items-center h-11 p-0  flex mb-5"
                type="ghost"
              >
                <img
                  className="w-16 h-16 rounded-full  items-center flex"
                  src="/assets/images/logo.jpg"
                />
              </Button>
            </div>
            <div className="flex  flex-row-reverse items-center ">
              <p className="ml-4 font-bold  text-xl">فون</p>
              <p className="text-[#a4c6eb] font-bold text-base font-sans-serif">
                {" "}
                +92 -333 -435673
              </p>
            </div>
            <div className="flex  flex-row-reverse items-center">
              <p className="ml-4 font-bold  text-xl">ای میل</p>
              <p className="text-[#a4c6eb] font-bold text-base font-sans-serif">
                shaoorpk1@gmail.com
              </p>
            </div>
            <div className="flex  flex-row-reverse items-center">
              <p className="ml-4 font-bold   text-xl">پتہ</p>
              <p className=" font-bold text-base font-sans-serif ">
                {" "}
                27 بلاک 7 یا 8 دارالامان سوسائٹی پیچ شارع فیصل
              </p>
            </div>
            <div>
              {" "}
              <img
                className="w-full h-36 mt-6"
                src="/assets/images/HILmr.png"
              />
            </div>
          </div>
        </div>
        <Divider className="bg-white" />
        <div className="mt-[20px] mb-[40px]">
          <p className="font-bold tracking-widest text-lg">
            جملہ حق محفوظ ہے۔shaoor.pk کاپی رائٹ{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CommonFooter;
