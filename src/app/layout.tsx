import type { Metadata } from "next";
import "./globals.css";
import NavigationMenu from "@/components/Layout/NavigationMenu";

export const metadata: Metadata = {
  title: "Rianul Amin • Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-[calc(100dvh)] p-[30px]">
          <div className="flex flex-col lg:flex-row gap-[5px]">
            <div className="w-full lg:w-[250px]">
              <NavigationMenu />
            </div>
            <div className="lg:w-[calc(100vw-310px)] w-[calc(100vw-60px)] lg:h-[calc(100vh-60px)] h-[calc(100vh-160px)]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
