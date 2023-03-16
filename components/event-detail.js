import Image from "next/image";

function EventDetail(props) {
  const { title, address, content, date} = props;

  return (
    <>
      <Image src="/event-samle.jpg" alt={title} width={250} height={160} />
      <h2>
        Event Name:
        {title}
      </h2>
      <time>Date: {date}</time>
      <address>Address: {address}</address>
      <p>Content: {content}</p>
    </>
  );
}

export default EventDetail;
