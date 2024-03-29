import prisma from "@/lib/prisma";

export default async function Home() {
  const concerts = await prisma.concert.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(concerts)}
    </main>
  );
}
