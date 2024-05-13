import { FC } from "react";
import StandardHeaderSection from "@/app/_global/sections/StandardHeaderSection";

interface Props {}
const HeaderSection: FC<Props> = ({}) => {
  return (
    <StandardHeaderSection id="Login">
      <header className="">로그인</header>
    </StandardHeaderSection>
  );
};

export default HeaderSection;
