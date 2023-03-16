import CommentList from "./comment-list";
import { useEffect, useState } from "react";
import NewComment from "./new-comment";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [responseMessage, setResponseMessage] = useState();

  const [isFetchingCommets, setIsFetchingCommets] = useState(false);

  useEffect(() => {
    if (showComments) {
      setResponseMessage();
      setIsFetchingCommets(true);
      fetch("/api/get-comments", {
        method: "POST",
        body: JSON.stringify(eventId),
        header: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data[0].user.name);
          console.log(data[0].user.image);
          setComments(data);
          setIsFetchingCommets(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    const fullCommentData = Object.assign(
      {},
      { eventId: eventId },
      commentData
    );
    fetch("/api/post-comment", {
      method: "POST",
      body: JSON.stringify(fullCommentData),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setResponseMessage(data.message));
  }

  return (
    <section>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {responseMessage && <strong>{responseMessage}</strong>}
      {showComments && !isFetchingCommets && <CommentList items={comments} />}
      {showComments && isFetchingCommets && <p>Loading ...</p>}
    </section>
  );
}

export default Comments;
