import Image from "next/image";
import Button from "./button";
import { useState } from "react";
import UpdateEventForm from "./update-event-form";

function EventItem(props) {
  const { title, address, date, id } = props;
  const exploreLink = `/events/${id}`;

  const [updateForm, setUpdateForm] = useState(false);
  const [responseMessage, setResponseMessage] = useState()

  async function deleteEvent() {
    await fetch("/api/delete-event", {
      method: "DELETE",
      body: JSON.stringify(id),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setResponseMessage(data.message));
  }

  function showUpdateForm() {
    if(updateForm) {
        setUpdateForm(false);
    } else {
        setUpdateForm(true);
    }    
  }

  async function updateEventHandler(eventData) {
    const updateData = Object.assign({}, {id: id}, eventData);
    console.log(updateData);
    await fetch("/api/update-event", {
        method: "PATCH",
        body: JSON.stringify(updateData),
        header: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => setResponseMessage(data.message))
  }

  return (
    <li>
      <Image src="/event-samle.jpg" alt={title} width={250} height={160} />
      <h2>
        Event Name:    {title}
      </h2>
      <time>Date: {date}</time>
      <address>Address: {address}</address>
      <Button link={exploreLink}>
        <span>Explore Event</span>
      </Button>
      <Button onClick={deleteEvent}>
        <span>Delete Event</span>
      </Button>
      <Button onClick={showUpdateForm}>
        <span>Update Event</span>
      </Button>
      {updateForm && <UpdateEventForm onAddEvent={updateEventHandler}/>}
      {responseMessage && <strong>{responseMessage}</strong>}
    </li>
  );
}

export default EventItem;
