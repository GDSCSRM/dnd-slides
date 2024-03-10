import Layout from "~/components/layout";
import List from "~/components/list";
import Code from "~/components/code";
import { loadersExample } from "~/utils/examples";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | Loaders" },
];

export default function ContentLoaders() {
  return (
    <Layout
      title="Loaders"
      description="Provides data to the route when rendering"
    >
      <List
        items={[
          "It runs on the server before rendering the page",
          <span>
            <kbd>loader</kbd>s can be create by exporting a function called{" "}
            <kbd>loader</kbd> in the route files
          </span>,
        ]}
      />
      <Code>{loadersExample}</Code>
    </Layout>
  );
}
