"use server";

import { RESPONSE_STATUS } from "@/constants/status";
import { ActionRegisterLocalReq } from "./auth.dto";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function actionRegisterLocal(dto: ActionRegisterLocalReq) {
  const { email, displayName, password, position } = dto;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await prisma.user.create({
    data: {
      email,
      displayName,
      password: hashedPassword,
      position,
    },
  });

  return { code: 1, status: RESPONSE_STATUS.SUCCESS };
}
