import Layout from "~/components/layout";
import List from "~/components/list";
import Button from "~/components/button";
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | Routing" },
];

export default function ContentRoutinf() {
  return (
    <Layout title="Routing">
      <List
        items={[
          "Every file in the routes directory correspond to a route",
          "The routes are nested by default i.e the child route is nested inside the parent route",
          <span>
            The contents of the child route is inserted into{" "}
            <kbd>&lt;Outlet /&gt;</kbd>
          </span>,
          <span>
            Adding a <kbd>.</kbd> to the file name will create <kbd>/</kbd> in
            the URL
          </span>,
          <span>
            <kbd>$</kbd> can be used to create dynamic routes
          </span>,
          <span>
            Routes can be create without nesting the layout by using a trailing{" "}
            <kbd>_</kbd>
          </span>,
        ]}
      />
      <Link to="/example/routing">
        <Button>Start the Routing Journey</Button>
      </Link>
    </Layout>
  );
}
