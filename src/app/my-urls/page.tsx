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
import { FilePenLine, Trash2 } from "lucide-react";
import Link from "next/link";

export default async function MyURLs() {
  // get the data
  const userId = "me";
  const urls = await prisma.url.findMany({ where: { userId } });
  console.log(urls);

  // map the data and populate them

  return (
    <div className="h-full">
      <h2 className="text-2xl font-extrabold mb-4">Your recent TinyURLS</h2>

      <ul>
        {urls.map(({ id, short, long, views, updateAt }) => (
          <li key={id}>
            <Card className="rounded-sm">
              <CardHeader className="pb-0">
                <CardTitle className="font-bold text-xl leading-none">
                  {process.env.BASE_URL}/{short}
                </CardTitle>
                <CardDescription className="text-secondary">
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
                <Link href={`/my-urls/${id}`}>
                  <Button size="icon">
                    <FilePenLine />
                  </Button>
                </Link>
                <Button size="icon" variant="destructive">
                  <Trash2 />
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
