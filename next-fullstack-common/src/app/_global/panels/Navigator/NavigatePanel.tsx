import Link from "next/link";
import { FC } from "react";
import LogoutButton from "./LogoutButton";
import StandardPanel from "../StandardPanel";

interface Props {
  session: any;
}
const NavigatePanel: FC<Props> = ({ session }) => {
  return (
    <StandardPanel
      id="Navigate"
      className="flex space-x-4 items-center fixed top-0 w-full"
    >
      <Link href={"/"}>홈</Link>
      {session?.user ? (
        <>
          <Link href={"/profile/me"}>프로필</Link>
          <LogoutButton />
        </>
      ) : (
        <Link href={"/auth"}>로그인</Link>
      )}
    </StandardPanel>
  );
};

export default NavigatePanel;
