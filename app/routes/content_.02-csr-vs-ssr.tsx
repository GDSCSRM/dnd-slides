import Layout from "~/components/layout";
import type { MetaFunction } from "@remix-run/react";
import List from "~/components/list";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | SSG vs SSR" },
];

export default function ContentSsgVsSsr() {
  return (
    <Layout title="CSR vs SSR">
      <List
        items={[
          "In CSR, the server sends the HTML file with a script tag",
          "The script tag fetches the JavaScript file and renders the content",
          "In SSR, the server sends the HTML file with the content already rendered",
          "The content is hydrated with JavaScript to make it interactive",
        ]}
      />
    </Layout>
  );
}
