import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-extrabold text-4xl">TINYURL</h1>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
