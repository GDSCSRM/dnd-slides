import Button from "~/components/button";
import { Link, Outlet, useLocation } from "@remix-run/react";

export default function ExampleRouting() {
  const { pathname } = useLocation();

  return (
    <main className="flex flex-col min-h-screen justify-center items-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <p>
          Text from <kbd>/example/routing</kbd>
        </p>
        <p>File: example.routing.tsx</p>
      </div>
      <Outlet />
      <div className="flex gap-2">
        <LinkButton to="/example/routing">Parent Route</LinkButton>
        <LinkButton to="/example/routing/nested">Nested Route</LinkButton>
        <LinkButton to="/example/routing/137">Dynamic Route</LinkButton>
        <LinkButton to="/example/routing/without-nesting">
          Without Nesting
        </LinkButton>
        <LinkButton to="/content/06-routing">Back to Routing</LinkButton>
      </div>
      <p>Current Pathname: {pathname}</p>
    </main>
  );
}

function LinkButton({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
}
