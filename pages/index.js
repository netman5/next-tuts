import { Fragment } from "react";
import Link from "next/link";

function HomePage() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/news/something-random">Some random news</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default HomePage;