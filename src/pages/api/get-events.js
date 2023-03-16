import { prisma } from "../../../server/db/client";

async function handler(req, res) {
  if (req.method === "GET") {
    const events = await prisma.events.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(201).json(events);
  }
}

export default handler;
