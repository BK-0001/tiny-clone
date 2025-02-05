"use client";

import { Button } from "@/components/ui/button";
import { incrementViews } from "@/lib/actions/urls";
import { Url } from "@prisma/client";
import { ExternalLink } from "lucide-react";
import Form from "next/form";
import { FormEvent } from "react";

type Props = {
  id: Url["id"];
  longUrl: Url["long"];
};

export default function ExternalLinkButton({ id, longUrl }: Props) {
  // opening the external link

  // update views in the record

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    window.open(longUrl);
    incrementViews(id);
  };

  return (
    <Form action="longUrl" onSubmit={handleSubmit}>
      <Button size="icon">
        <ExternalLink />
      </Button>
    </Form>
  );
}
