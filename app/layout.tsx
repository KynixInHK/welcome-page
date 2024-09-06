import type { Metadata } from "next";
import "@/style/global.scss";
import LoadingManager from "@/components/views/LoadingManager";

export const metadata: Metadata = {
  title: "Hello, new world_",
  description: "学生在线中心 Web 欢迎页",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <LoadingManager>
          {children}
        </LoadingManager>
      </body>
    </html>
  );
}
