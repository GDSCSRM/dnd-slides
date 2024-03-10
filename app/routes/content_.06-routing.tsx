import Layout from "~/components/layout";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Design & Develop | Routing" }];

export default function ContentRoutinf() {
  return (
    <Layout title="Routing">
      Content goes here
    </Layout>
  );
}
