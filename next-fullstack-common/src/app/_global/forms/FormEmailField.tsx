import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface Props {
  form: any;
}
const FormEmailField: FC<Props> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>이메일</FormLabel>
          <FormControl>
            <Input placeholder="이메일을 입력해주세요" {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormEmailField;
