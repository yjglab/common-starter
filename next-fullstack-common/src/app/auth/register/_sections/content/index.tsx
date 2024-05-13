import { FC } from "react";
import StandardContentSection from "@/app/_global/sections/StandardContentSection";
import RegisterForm from "./RegisterForm";

interface Props {}
const ContentSection: FC<Props> = ({}) => {
  return (
    <StandardContentSection id="Register">
      <RegisterForm />
    </StandardContentSection>
  );
};

export default ContentSection;
