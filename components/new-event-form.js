import { useRef, useState } from "react";

function NewEventForm(props) {
  const [isInvalid, setIsInvalid] = useState(false);
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const contentInputRef = useRef();
  const dateInputRef = useRef();

  function sendEventHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredContent = contentInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    if (!enteredTitle || !enteredAddress || !enteredContent || !enteredDate) {
      setIsInvalid(true);
      return;
    }

    props.onAddEvent({
      title: enteredTitle,
      address: enteredAddress,
      content: enteredContent,
      date: enteredDate,
    });
  }

  return (
    <form onSubmit={sendEventHandler}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" ref={titleInputRef} />
      <label htmlFor="address">Address</label>
      <input type="text" id="address" ref={addressInputRef} />
      <label htmlFor="date">Date</label>
      <input type="text" id="date" ref={dateInputRef} />
      <label htmlFor="content">Content</label>
      <textarea rows="2" type="text" id="content" ref={contentInputRef} />

      <button>Submit</button>
    </form>
  );
}

export default NewEventForm;
