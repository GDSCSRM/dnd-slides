import Layout from "~/components/layout";
import Code from "~/components/code";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | Meta" },
  { name: "description", content: "This is a Meta page." },
];

export default function ContentMeta() {
  const metaFunctionExample = `import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | Meta" },
  { name: "description", content: "This is a Meta page." },
];`;

  const htmlOutput = `<title>Design & Develop | Meta</title>
<meta name="description" content="This is a Meta page.">`;

  return (
    <Layout title="Meta" description="Allows to export metadata HTML tags">
      <Code>{metaFunctionExample}</Code>
      The above code produces the following HTML output:
      <Code language="html">{htmlOutput}</Code>
    </Layout>
  );
}
