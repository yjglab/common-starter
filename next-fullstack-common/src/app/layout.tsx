import "./globals.css";
import { SERVICE_NAME } from "@/constants/global";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import NavigatePanel from "./_global/panels/Navigator/NavigatePanel";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import RecoilProvider from "@/providers/RecoilProvider";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SERVICE_NAME.ko} | 루트`,
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={cn(
          notoSans.className,
          "min-h-screen w-full h-full flex flex-col items-center"
        )}
      >
        <NextAuthProvider>
          <RecoilProvider>
            <NavigatePanel session={session} />
            {children}
            <Toaster />
          </RecoilProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
