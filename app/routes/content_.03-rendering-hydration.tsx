import Layout from "~/components/layout";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | Rendering & Hydration" },
];

export default function ContentRenderingHydration() {
  return (
    <Layout title="Rendering & Hydration">
      <p>
        In SSR, the server sends the HTML file with the content already
        rendered. The content is hydrated with JavaScript to make it
        interactive.
      </p>
    </Layout>
  );
}
