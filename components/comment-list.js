function CommentList(props) {
  const { items } = props;
  // console.log(items[0]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.user.image} />
          <p>Comment by {item.user.name}</p>
          <p>{item.content}</p>
          <div>
            By <p>{item.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
