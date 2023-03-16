import { prisma } from "../../../server/db/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401).json({ message: "Cannot add event, please sign in first." });
      return;
    }
    const reqBodyJson = JSON.parse(req.body);
    const { title, address, content, date } = reqBodyJson;
    await prisma.events.create({
      data: {
        title,
        address,
        content,
        date,
      },
    });
    res.status(201).json({ message: "New Event added successfully!" });
  }
}

export default handler;
