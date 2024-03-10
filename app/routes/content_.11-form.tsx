import Layout from "~/components/layout";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Design & Develop | Form" }];

export default function ContentForm() {
  return (
    <Layout title="Form">
      Content goes here
    </Layout>
  );
}
