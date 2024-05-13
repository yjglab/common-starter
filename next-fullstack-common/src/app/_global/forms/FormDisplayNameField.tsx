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
const FormDisplayNameField: FC<Props> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="displayName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>표시 이름</FormLabel>
          <FormControl>
            <Input placeholder="표시 이름을 입력해주세요" {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormDisplayNameField;
