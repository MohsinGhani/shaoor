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
          <div className="mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
