"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormEmailField from "@/app/_global/forms/FormEmailField";
import { formValidation } from "@/constants/validation";
import FormPasswordField from "@/app/_global/forms/FormPasswordField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: formValidation.email,
  password: formValidation.password,
});
const defaultValues = {
  email: "jaekyeong@a.com",
  password: "asdasd",
};

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await signIn("email", {
      ...values,
    });
    if (!response?.error) {
      console.log("SUCCESS");
    } else {
      console.log("FAILED");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
        <FormEmailField form={form} />
        <FormPasswordField form={form} />
        <Button type="submit">로그인</Button>
        {/* 툴팁 */}
      </form>
    </Form>
  );
};

export default LoginForm;
