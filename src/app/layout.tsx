"use client";

import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import withTheme from "../../theme";
// import { Amplify } from "aws-amplify";
// import awsCognitoConfig from "../lib/awsCognitoConfig";
import { Providers } from "@/redux/provider";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Amplify.configure({ ...awsCognitoConfig, ssr: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log("🚀  mounted:", mounted);

  return withTheme(
    <html lang="en">
      <body>
        <Providers>
          <div
            className="mx-auto"
            style={{ visibility: !mounted ? "hidden" : "visible" }}
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
