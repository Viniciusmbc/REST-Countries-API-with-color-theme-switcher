import { Link } from "@remix-run/react";

export default function Region() {
  return (
    <article className=" mx-auto text-center">
      Please, click in country name to see country details, first !<br></br>
      <Link className=" mx-auto" to={"/"}>
        Click here to go back a home page!
      </Link>
    </article>
  );
}
