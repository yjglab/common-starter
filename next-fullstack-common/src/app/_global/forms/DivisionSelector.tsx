import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
interface Props {
  field: any;
  division: "web" | "mobile" | "ai";
}
const DivisionSelector: FC<Props> = ({ field, division }) => {
  return (
    <Select onValueChange={field.onChange}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={division} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value="web">웹</SelectItem>
        <SelectItem value="mobile">모바일</SelectItem>
        <SelectItem value="ai">인공지능</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default DivisionSelector;
