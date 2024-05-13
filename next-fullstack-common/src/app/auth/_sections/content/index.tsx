"use client";

import ActionButton from "@/app/_global/partials/ActionButton";
import StandardContentSection from "@/app/_global/sections/StandardContentSection";
import { useRouter } from "next/navigation";
import { FC } from "react";
interface Props {}
const ContentSection: FC<Props> = ({}) => {
  const navigate = useRouter();
  const handleNavigate = (dest: string) => {
    return () => navigate.push(dest);
  };

  return (
    <StandardContentSection id="Auth" className="flex flex-col space-y-4">
      <ActionButton label="회원가입" cb={handleNavigate("/auth/register")} />
      <ActionButton label="로그인" cb={handleNavigate("/auth/login")} />
    </StandardContentSection>
  );
};

export default ContentSection;
