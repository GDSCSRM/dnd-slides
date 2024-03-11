import Layout from "~/components/layout";
import Button from "~/components/button";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | Rendering & Hydration" },
];

export default function ContentRenderingHydration() {
  return (
    <Layout title="Rendering & Hydration">
      <p>
        In SSR, the server sends the HTML file with the content already
        rendered. The content is hydrated on the client with JavaScript to make it
        interactive.
      </p>
      <p>Try clicking the button with and without enabling JavaScript</p>
      <Button onClick={() => alert("Hello from SSR!")}>Click me</Button>
    </Layout>
  );
}
