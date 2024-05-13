import { Divisions } from "@/constants/division";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

interface Props {
  form: any;
}
const FormPositionField: FC<Props> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="position"
      render={({ field }) => (
        <FormItem>
          <FormLabel>활동 분야</FormLabel>
          <Select onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="활동 분야를 선택해주세요." />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="h-[200px]">
              <SelectGroup>
                <SelectLabel>웹</SelectLabel>
                {Divisions.Web.map((division) => (
                  <SelectItem key={division.value} value={division.value}>
                    {division.label}
                  </SelectItem>
                ))}
                <SelectSeparator />
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormPositionField;
