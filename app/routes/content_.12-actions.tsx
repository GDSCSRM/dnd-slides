import Layout from "~/components/layout";
import List from "~/components/list";
import Code from "~/components/code";
import { actionsExample } from "~/utils/examples";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | Actions" },
];

export default function ContentActions() {
  return (
    <Layout
      title="Actions"
      description="Handles data mutations and side effects on the server"
    >
      <List
        items={[
          <span>
            Just like <kbd>loader</kbd>, this is a function which runs only on
            server
          </span>,
          <span>
            <kbd>action</kbd>s can be create by exporting a function called{" "}
            <kbd>action</kbd> in the route files
          </span>,
        ]}
      />
      <Code>{actionsExample}</Code>
    </Layout>
  );
}
