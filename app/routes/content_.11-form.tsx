import Layout from "~/components/layout";
import List from "~/components/list";
import Code from "~/components/code";
import Button from "~/components/button";
import { formExample } from "~/utils/examples";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Design & Develop | Form" }];

type ActionData = {
  name: string | null;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name =
    typeof formData.get("name") === "string"
      ? (formData.get("name") as string)
      : null;

  return { name };
};

export default function ContentForm() {
  const navigation = useNavigation();
  const actionData = useActionData<ActionData>();

  return (
    <Layout title="Form">
      <List
        items={[
          <span>
            Enhances the HTML <kbd>form</kbd> tag
          </span>,
          "Submits the data to actions via fetch",
          <span>
            The form state can be observed using <kbd>useNavigation</kbd> hook
          </span>,
          "Does not need JavaScript to work",
        ]}
      />
      <Code>{formExample}</Code>
      <Form method="POST" className="flex gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="bg-secondary px-4 py-1 rounded-md border border-highlight w-fit h-fit"
        />
        <Button type="submit">Submit</Button>
      </Form>
      <p>Name: {actionData?.name}</p>
      <p>Form State: {navigation.state}</p>
    </Layout>
  );
}
