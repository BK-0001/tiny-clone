import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import ClerkAuthButton from "./clerk-auth-button";
import Navigation from "./navigation";

export default async function Header() {
  const { userId } = await auth();

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-extrabold text-4xl">TINYURL</h1>
        </Link>

        <div className="flex items-center space-x-2">
          <Navigation isAuthed={!!userId} />
          <ClerkAuthButton />
        </div>
      </div>
    </header>
  );
}
