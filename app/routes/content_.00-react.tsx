import Layout from "~/components/layout";
import List from "~/components/list";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | React" },
];

export default function ContentReact() {
  return (
    <Layout title="React" description="The library for building user interfaces">
      <List items={[
        "React is a JavaScript library for building user interfaces",
        "It provides way to compose user interfaces using reusable components",
        "It is used with ReactDOM to render the components on the web",
        "It uses JSX, a syntax extension for JavaScript, to write the components",
      ]} />
    </Layout>
  );
}
