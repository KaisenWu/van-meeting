import { prisma } from "../../../server/db/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

async function handler(req, res) {
  if (req.method === "PATCH") {
    const reqBodyJson = JSON.parse(req.body);
    const { id, title, address, content, date } = reqBodyJson;
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401).json({ message: "Cannot update event, please sign in first." });
      return;
    }
    await prisma.events.update({
        where: {
          id: id
        },
        data: {
            title: title,
            address: address,
            content: content,
            date: date,
        }
      });
    res.status(201).json({message: 'Event updated successfully!'})
  } 
}

export default handler;