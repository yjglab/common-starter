import { FC } from "react";
import ContentSection from "./_sections/content";
import StandardPage from "@/app/_global/pages/StandardPage";
import HeaderSection from "./_sections/header";
import { SERVICE_NAME } from "@/constants/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SERVICE_NAME.ko} | 멤버 등록`,
  description: "",
};

interface Props {}
const RegisterPage: FC<Props> = ({}) => {
  return (
    <StandardPage id="Register">
      <HeaderSection />
      <ContentSection />
    </StandardPage>
  );
};
export default RegisterPage;
