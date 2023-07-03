"use client";

import "./globals.scss";
import withTheme from "../../theme";
// import { Amplify } from "aws-amplify";
// import awsCognitoConfig from "../lib/awsCognitoConfig";
import { Providers } from "@/redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Amplify.configure({ ...awsCognitoConfig, ssr: true });

  return withTheme(
    <html lang="en">
      <body>
        <Providers>
          <div className="max-w-[1080px] mx-auto px-4 lg:px-8">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
