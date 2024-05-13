import { Button } from "@/components/ui/button";
import ContentSection from "./(home)/_sections/content";
import StandardPage from "./_global/pages/StandardPage";
import ActionButton from "./_global/partials/ActionButton";

export default function RootPage() {
  return (
    <StandardPage
      id="Home"
      className="justify-center text-xl flex flex-col items-center min-h-screen space-y-8"
    >
      <h1 className="font-bold">Home</h1>
      <ActionButton label="공유 컴포넌트 테스트 버튼"></ActionButton>
      <Button className="bg-indigo-500">Shadcn 컴포넌트 테스트 버튼</Button>
      <ContentSection>dd</ContentSection>
      <span className="text-xs"></span>
    </StandardPage>
  );
}
