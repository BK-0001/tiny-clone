import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { FilePenLine, Trash2 } from "lucide-react";

export default function MyURLs() {
  return (
    <div className="h-full">
      <h2 className="text-2xl font-extrabold mb-4">Your recent TinyURLS</h2>

      <Card className="rounded-sm">
        <CardHeader className="pb-0">
          <CardTitle className="font-bold text-xl leading-none">
            tinyurl.com/39wfz3xx
          </CardTitle>
          <CardDescription className="text-secondary">
            https://nextjs.org/
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2 flex space-x-4 font-light text-foreground">
          <p>1 click</p>
          <p>|</p>
          <p>an hour ago</p>
        </CardContent>
        <CardFooter className="space-x-1">
          <Button size="icon">
            <FilePenLine />
          </Button>
          <Button size="icon" variant="destructive">
            <Trash2 />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
