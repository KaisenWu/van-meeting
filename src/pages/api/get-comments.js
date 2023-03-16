import { prisma } from "../../../server/db/client";

async function handler(req, res) {
  if (req.method === "POST") {
    const eventId = parseInt(req.body)
    const comments = await prisma.comments.findMany({
        where: {
            eventId: eventId
          },
          include: {
            user: true,
          }
    });
    res.status(201).json(comments);
  }
}

export default handler;