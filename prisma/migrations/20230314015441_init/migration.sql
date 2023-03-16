-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_eventId_fkey";

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE CASCADE ON UPDATE CASCADE;
