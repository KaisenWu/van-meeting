import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import LogNav from "./log-nav";

function MainNavigation() {
  const { data: session } = useSession();

  return (
    <>
      <Link href="/">
        <div>Home</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/events">Events</Link>
          </li>

          <li>
            <LogNav
              user={session?.user}
              onSignIn={signIn}
              onSignOut={signOut}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainNavigation;
