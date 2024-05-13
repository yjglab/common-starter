import { SERVICE_NAME } from "@/constants/global";
import type { Metadata } from "next";
import StandardPage from "../_global/pages/StandardPage";

export const metadata: Metadata = {
  title: `${SERVICE_NAME.ko} | 접속`,
  description: "",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <StandardPage id="Auth">{children}</StandardPage>;
}
