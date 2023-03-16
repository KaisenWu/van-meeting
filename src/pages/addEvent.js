import Head from "next/head";
import NewEventForm from "../../components/new-event-form";
import { useState } from "react";

function AddEvent() {
  const [responseMessage, setResponseMessage] = useState()
  async function addEventHandler(eventData) {
    await fetch("/api/post-event", {
      method: "POST",
      body: JSON.stringify(eventData),
      header: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => setResponseMessage(data.message))
  }

  return (
    <>
      <Head>
        <title>Mega Events</title>
      </Head>
      <NewEventForm onAddEvent={addEventHandler} />
      {responseMessage && <strong>{responseMessage}</strong>}
    </>
  );
}

export default AddEvent;
