"use client";

import { redirectToExternalLink } from "@/lib/actions/urls";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Nothing() {
  const { short } = useParams<{ short: string }>();

  useEffect(() => {
    redirectToExternalLink(short);
  }, []);

  return null;
}
