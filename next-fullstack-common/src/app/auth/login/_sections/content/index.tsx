import { FC } from "react";
import StandardContentSection from "@/app/_global/sections/StandardContentSection";
import LoginForm from "./LoginForm";

interface Props {}
const ContentSection: FC<Props> = ({}) => {
  return (
    <StandardContentSection id="Login">
      <LoginForm />
    </StandardContentSection>
  );
};

export default ContentSection;
