import Layout from "~/components/layout";
import List from "~/components/list";
import Code from "~/components/code";
import Button from "~/components/button";
import { useActionDataExample } from "~/utils/examples";
import { useActionData, Form, type MetaFunction } from "@remix-run/react";
import { ActionFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | useActionData" },
];

export const action: ActionFunction = async () => {
  return { message: "Hello from action!" };
};

export default function ContentUseActionData() {
  const actionData = useActionData();

  return (
    <Layout title="useActionData">
      <List
        items={[
          "It returns the data from the nearest action",
          <span>
            The data would be <kbd>undefined</kbd> when the action is not
            triggered yet
          </span>,
        ]}
      />
      <Code>{useActionDataExample}</Code>
      Action Data: <pre>{JSON.stringify(actionData)}</pre>
      <Form method="POST">
        <Button type="submit">Trigger Action</Button>
      </Form>
    </Layout>
  );
}
