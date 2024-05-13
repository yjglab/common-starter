import HeaderSection from "./_sections/header";
import ContentSection from "./_sections/content";
import StandardPage from "../_global/pages/StandardPage";

export default function AuthPage() {
  return (
    <StandardPage id="Auth">
      <HeaderSection />
      <ContentSection />
    </StandardPage>
  );
}
