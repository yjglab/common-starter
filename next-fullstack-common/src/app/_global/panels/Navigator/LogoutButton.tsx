"use client";

import { FC } from "react";
import ActionButton from "@/app/_global/partials/ActionButton";
import { signOut } from "next-auth/react";

interface Props {}

const LogoutButton: FC<Props> = ({}) => {
  const handleLogout = async () => {
    await signOut();
  };
  return <ActionButton label="로그아웃" cb={handleLogout} />;
};
export default LogoutButton;
