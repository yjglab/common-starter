import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  form: any;
}
const FormPasswordField: FC<Props> = ({ form }) => {
  const [inputType, setInputType] = useState("password");

  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center space-x-1">
            <FormLabel>비밀번호</FormLabel>
            <button
              type="button"
              onClick={() =>
                setInputType(inputType === "password" ? "text" : "password")
              }
            >
              {inputType === "password" && <Eye size={20} />}
              {inputType === "text" && <EyeOff size={20} />}
            </button>
          </div>
          <FormControl>
            <Input
              placeholder="비밀번호를 입력해주세요"
              type={inputType}
              className="relative"
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormPasswordField;
