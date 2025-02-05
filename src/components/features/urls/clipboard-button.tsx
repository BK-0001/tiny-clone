"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";
import { MouseEvent, RefAttributes } from "react";

type Props = ButtonProps &
  RefAttributes<HTMLButtonElement> & {
    url: string;
  };

export default function ClipboardButton({ url, onClick, ...rest }: Props) {
  const clickHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    // copy the content to the clipboard
    await navigator.clipboard.writeText(url);
  };

  return (
    <Button
      size="icon"
      className="bg-secondary"
      onClick={clickHandler}
      {...rest}
    >
      <ClipboardCheck />
    </Button>
  );
}
