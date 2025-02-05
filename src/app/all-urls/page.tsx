import { prisma } from "@/lib/prisma";

export default async function AllUrl() {
  const urls = await prisma.url.findMany({ orderBy: { createAt: "desc" } });

  return (
    <ul>
      {urls.map((url) => (
        <li key={url.id}>
          <h2>{url.short}</h2>
          <p>{url.long}</p>
        </li>
      ))}
    </ul>
  );
}
