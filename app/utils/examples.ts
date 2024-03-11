export const loadersExample = `import type { LoaderFunction } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const res = await someAsyncApiFunction();

  const data = await res.json();
  return json({ data });
};`;

export const useLoaderDataExample = `import { useLoaderData } from "@remix-run/react";

export default function MyComponent() {
  const data = useLoaderData();

  // Display the data
}`;

export const formExample = `import { Form } from "@remix-run/react";

<Form method="POST">
  <input
    type="text"
    name="name"
    placeholder="Your name"
  />
  <button type="submit">Submit</button>
</Form>`;

export const actionsExample = `import type { ActionFunction } from "@remix-run/react";
import { json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  // Do something with the form data
  await someAsyncMutation(formData);

  return json({ message: "Successful!" });
};`;

export const useActionDataExample = `import { useActionData } from "@remix-run/react";

export default function MyComponent() {
  const data = useActionData();

  // Display the data
}
`;

export const errorBoundaryExample = `export function ErrorBoundary() {
  return (
    <html>
      <head>
        <title>Something went wrong!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
      </body>
    </html>
  );
}`;