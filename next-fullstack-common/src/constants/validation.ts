import { z } from "zod";

export const formValidation = {
  displayName: z.string().min(3, {
    message: "표시 이름을 최소 3자리 이상 입력해주세요.",
  }),
  email: z.string().email({
    message: "이메일 형식이 아닙니다.",
  }),
  position: z
    .string()
    .min(1, { message: "최소 하나 이상의 활동 범위를 선택해주세요." }),
  password: z.string().min(1, {
    message: "비밀번호를 최소 1자리 이상 입력해주세요.",
  }),
};
