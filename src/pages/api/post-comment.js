import { prisma } from "../../../server/db/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401).json({ message: "Cannot post commet, please sign in first." });
      return;
    }

    const prismaUser = await prisma.user.findUnique({
      where:{ email: session.user.email}
    })

    const reqBodyJson = JSON.parse(req.body);
    const { eventId, content } = reqBodyJson;
    await prisma.comments.create({
        data: {
          content: content,
          eventId: eventId,
          email: session.user.email,
          userId: prismaUser.id
        },
      })
    res.status(201).json({message: 'New Content added successfully!'})
  } 
}

export default handler;
