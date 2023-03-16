import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        {props.children}
      </Link>
    );
  }

  return (
    <button onClick={props.onClick}>
      {props.children}  
    </button>
  );
}

export default Button;
