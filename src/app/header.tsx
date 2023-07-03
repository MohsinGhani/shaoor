import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const CommonHeader = () => {
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

export default CommonHeader;
