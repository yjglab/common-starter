import { FC } from "react";
import ContentSection from "./_sections/content";
import StandardPage from "@/app/_global/pages/StandardPage";
import HeaderSection from "./_sections/header";
import { PageAuth, SERVICE_NAME } from "@/constants/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SERVICE_NAME.ko} | 로그인`,
  description: "",
};

interface Props {}

const LoginPage: FC<Props> = ({}) => {
  return (
    <StandardPage id="Login" auth={PageAuth.UNVERIFIED}>
      <HeaderSection />
      <ContentSection />
    </StandardPage>
  );
};
export default LoginPage;
