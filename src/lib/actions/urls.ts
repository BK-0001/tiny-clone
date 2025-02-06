"use server";

import { auth } from "@clerk/nextjs/server";
import { Url } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { createRandomString } from "../helpers/string";
import { prisma } from "../prisma";

export const createUrl = async (formData: FormData) => {
  const { userId } = await auth();

  if (!userId) {
    // do something for not authenticated
  }

  const long = formData.get("long") as string;

  const short = createRandomString();

  await prisma.url.create({
    data: { long, short, userId: userId! }
  });

  revalidatePath("/my-urls");
  redirect("/my-urls");
};

export const incrementViews = async (id: Url["id"]) => {
  await prisma.url.update({
    where: { id },
    data: { views: { increment: 1 } }
  });

  revalidatePath("/my-urls");
};

export const redirectToExternalLink = async (short: Url["short"]) => {
  const url = await prisma.url.findUnique({ where: { short } });

  if (!url) {
    // if the record is not found
    // render not found page
    notFound();
  }

  incrementViews(url.id);
  redirect(url.long);
};

export const deleteUrl = async (id: Url["id"]) => {
  await prisma.url.delete({ where: { id } });

  // revalidate
  revalidatePath("/my-urls");
};
