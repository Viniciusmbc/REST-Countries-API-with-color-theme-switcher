import { Link } from "@remix-run/react";

export default function Region() {
  return (
    <div>
      Please, select a region first!
      <Link to={"/"}>Click here to go back home page!</Link>
    </div>
  );
}
