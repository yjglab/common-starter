"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormEmailField from "@/app/_global/forms/FormEmailField";
import FormDisplayNameField from "@/app/_global/forms/FormDisplayNameField";
import FormPositionField from "@/app/_global/forms/FormPositionField";
import { formValidation } from "@/constants/validation";
import FormPasswordField from "@/app/_global/forms/FormPasswordField";
import { processStatus } from "@/constants/status";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { actionRegisterLocal } from "@/actions/auth/auth";

const formSchema = z.object({
  email: formValidation.email,
  displayName: formValidation.displayName,
  password: formValidation.password,
  position: formValidation.position,
});
const defaultValues = {
  email: "jaekyeong@a.com",
  password: "asdasd",
  displayName: "break",
  position: "Web",
};

const RegisterForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await actionRegisterLocal(values);
    const success = processStatus(response.status, toast);

    if (success) {
      alert("OK");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
        <FormEmailField form={form} />
        <FormPasswordField form={form} />
        <FormDisplayNameField form={form} />
        <FormPositionField form={form} />
        <Button type="submit">등록 요청</Button>
        {/* 툴팁 */}
      </form>
    </Form>
  );
};

export default RegisterForm;
