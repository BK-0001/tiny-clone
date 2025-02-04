"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/my-urls" legacyBehavior passHref>
            <NavigationMenuLink
              active={pathname === "/my-urls"}
              className={`${navigationMenuTriggerStyle()} bg-transparent`}
            >
              My URLS
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
