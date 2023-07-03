import React from "react";
import CommonHeader from "../header";
import { Header } from "antd/es/layout/layout";

const LandingPage = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };

  return (
    <div>
      <Header style={headerStyle}>Header</Header>
    </div>
  );
};

export default LandingPage;
