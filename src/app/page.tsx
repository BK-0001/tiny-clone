import longUrlIcon from "@/../public/long-icon.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import Form from "next/form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-4">
      <Image
        className="bg-cover -z-40"
        src="https://repository-images.githubusercontent.com/89461145/cd557500-21d2-11ea-8886-7030d5aaaf93"
        fill={true}
        alt="background image"
      />
      <Card className="max-w-[450px]">
        <CardContent className="p-4 font-semibold">
          <Form action={""} className="space-y-4">
            <label htmlFor="long-url" className="flex space-x-2">
              <Image src={longUrlIcon} alt="icon for shortening long url" />
              <span>Shorten a long URL</span>
            </label>
            <Input
              type="text"
              name="long"
              id="long-url"
              className="py-5 px-2"
              placeholder="Enter long link here"
            />

            <div>
              <label htmlFor="domain" className="inline-block mb-4">
                Customize your link
              </label>
              <div className="flex space-x-2">
                <Select>
                  <SelectTrigger className="flex-[6] py-5 px-2">
                    <SelectValue placeholder="tinyurl.com" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="tinyurl.com">tinyurl.com</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  className="flex-[4] py-5 px-2"
                  placeholder="Enter alias..."
                />
              </div>
            </div>

            <Button
              className="bg-secondary font-bold w-full py-7 px-2 text-lg"
              size={"lg"}
            >
              Shorten URL
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
