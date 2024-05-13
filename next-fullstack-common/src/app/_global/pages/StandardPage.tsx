import { PageAuth } from "@/constants/global";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  auth?: PageAuth;
}
const StandardPage: FC<Props> = async ({
  children,
  id,
  className,
  auth = PageAuth.NONE,
}) => {
  const session = await getServerSession();
  if (auth === PageAuth.UNVERIFIED && session?.user) {
    redirect("/");
  }

  return (
    <main
      id={id + "Page"}
      className={cn(
        className,
        "max-w-4xl pt-10 w-full flex flex-col justify-center items-center"
      )}
    >
      {children}
    </main>
  );
};
export default StandardPage;
