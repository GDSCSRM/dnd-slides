import Layout from "~/components/layout";
import List from "~/components/list";
import Code from "~/components/code";
import { useLoaderDataExample } from "~/utils/examples";
import { useLoaderData, type MetaFunction } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | useLoaderData" },
];

export const loader: LoaderFunction = async () => {
  return { message: "Hello from loader!" };
};

export default function ContentUseLoaderData() {
  const data = useLoaderData();

  return (
    <Layout title="useLoaderData">
      <List
        items={[
          "It returns the data from the nearest loader",
          <span>
            The data would be <kbd>undefined</kbd> when the action is not
            triggered yet
          </span>,
        ]}
      />
      <Code>{useLoaderDataExample}</Code>
      Loader Data: <pre>{JSON.stringify(data)}</pre>
    </Layout>
  );
}
