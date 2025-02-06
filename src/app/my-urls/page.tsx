import ClipboardButton from "@/components/features/urls/clipboard-button";
import DeleteUrlDialog from "@/components/features/urls/delete-url-dialog";
import ExternalLinkButton from "@/components/features/urls/ExternalLinkButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { FilePenLine } from "lucide-react";
import Link from "next/link";

export default async function MyURLs() {
  // get the data
  const { userId } = await auth();

  if (!userId) {
    throw new Error("401, Unauthorized");
  }

  const urls = await prisma.url.findMany({
    where: { userId },
    orderBy: { createAt: "desc" }
  });

  // update number of clicks revalidate data or use some state

  /**
   * option 1.
   * create route handler to
   *
   */

  /**
   * create another page.tsx (server)
   */

  /**
   * create another page.tsx (client)
   */

  /**
   * use state to update ui
   */

  return (
    <div className="h-full">
      <h2 className="text-2xl font-extrabold mb-4">Your recent TinyURLS</h2>

      <ul className="space-y-4">
        {urls.map(({ id, short, long, views, updateAt }) => (
          <li key={id}>
            <Card className="rounded-sm">
              <CardHeader className="pb-0">
                <CardTitle className="font-bold text-xl leading-none">
                  {process.env.BASE_URL}/{short}
                </CardTitle>
                <CardDescription className="text-secondary line-clamp-2">
                  {long}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 flex space-x-4 font-light text-foreground">
                <p>
                  <span className="font-normal">{views}</span> click(s)
                </p>
                <p>|</p>
                <p>
                  Created At:{" "}
                  <span className="font-normal">
                    {updateAt.toLocaleDateString("en-us", {
                      dateStyle: "medium"
                    })}
                  </span>
                </p>
              </CardContent>
              <CardFooter className="space-x-1">
                <ClipboardButton url={`${process.env.BASE_URL}/${short}`} />
                <ExternalLinkButton id={id} longUrl={long} />

                <Link href={`/my-urls/${id}`}>
                  <Button size="icon">
                    <FilePenLine />
                  </Button>
                </Link>
                <DeleteUrlDialog id={id} />
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
