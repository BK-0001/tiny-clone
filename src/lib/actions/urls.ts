"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createRandomString } from "../helpers/string";
import { prisma } from "../prisma";

export const createUrl = async (formData: FormData) => {
  const long = formData.get("long") as string;

  const short = createRandomString();

  await prisma.url.create({
    data: { long, short, userId: "me" }
  });

  revalidatePath("/my-urls");
  redirect("/my-urls");
};
