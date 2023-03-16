import { prisma } from "../../../server/db/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "Cannot delete event, please sign in first." });
    return;
  }
  if (req.method === "DELETE") {
    const id = parseInt(req.body);
    await prisma.events.delete({
      where: { id: id },
    });
    res.status(201).json({ message: "Event delete successfully!" });
  }
}

export default handler;
