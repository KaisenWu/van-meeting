import { useRef } from "react";

function NewComment(props) {
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredComment = commentInputRef.current.value;

    props.onAddComment({
      content: enteredComment,
    });
  }

  return (
    <form onSubmit={sendCommentHandler}>
      <label htmlFor="comment">Your comment</label>
      <textarea id="comment" rows="5" ref={commentInputRef}></textarea>

      <button>Submit</button>
    </form>
  );
}

export default NewComment;
