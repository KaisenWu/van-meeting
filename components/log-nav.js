import Button from "./button";
import Link from "next/link";

function LogNav(props) {
  const { user, onSignIn, onSignOut } = props;

  return (
    <>
      <div>
        {!user ? (
          <Button onClick={onSignIn}>Sign In</Button>
        ) : (
          <>
            <div>
              <img src={user?.image} width={50} height={50} quality={100} alt=""/>
              <div>{user?.name}</div>
            </div>
            <div>
              <Link href="/profile">Your Profile</Link>
              <Link href="/addEvent">Add Event</Link>
              <Button onClick={onSignOut}>Sign Out</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default LogNav;
