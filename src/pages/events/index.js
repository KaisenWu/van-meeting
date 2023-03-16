import EventList from "../../../components/event-list";
import { useState, useEffect } from "react";


function AllEventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/get-events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, [events]);

  return (
    <>
      <h1>All Envents</h1>
      {events && <EventList events={events} />}
    </>
  );
}

export default AllEventsPage;
