import Layout from "~/components/layout";
import Code from "~/components/code";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Design & Develop | Links" }];

export default function ContentLink() {
  const linksFunctionExample = `import stylesheet from "~/styles/globals.css";
import codetheme from "highlight.js/styles/github-dark-dimmed.css";
import type { LinksFunction } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: codetheme },
];`;

  const htmlOutput = `<link rel="stylesheet" href="/build/path/to/globals.css">
<link rel="stylesheet" href="/build/path/to/github-dark-dimmed.css">`;

  return (
    <Layout title="Links" description="Allows to include link tags">
      <Code>{linksFunctionExample}</Code>
      The above code produces the following HTML output:
      <Code language="html">{htmlOutput}</Code>
    </Layout>
  );
}
