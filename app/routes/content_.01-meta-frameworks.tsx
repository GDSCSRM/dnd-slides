import Layout from "~/components/layout";
import type { MetaFunction } from "@remix-run/react";
import List from "~/components/list";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | Meta frameworks" },
];

export default function ExampleMetaFrameworks() {
  return (
    <Layout
      title="Meta-frameworks"
      description="Or frameworks, this is debatable!"
    >
      <List
        items={[
          "You can use React without a framework",
          "But react.dev recommends using a framework so it is easier to get started",
          "Simplifies the process of building a production-ready React application",
          "Frameworks provides solutions for common problems like routing, state management and more",
          "Few popular react frameworks include Next.js, Gatsby, Remix",
        ]}
      />
    </Layout>
  );
}
