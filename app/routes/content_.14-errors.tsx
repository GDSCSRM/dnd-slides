import Code from "~/components/code";
import Layout from "~/components/layout";
import Button from "~/components/button";
import { errorBoundaryExample } from "~/utils/examples";
import { useNavigate, type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | Errors" },
  { name: "description", content: "Handling errors in Remix" },
]

export default function ContentErrors() {
  const navigate = useNavigate();

  return (
    <Layout title="Errors" description="Handling errors in Remix">
      Remix provides ErrorBoundary to handle errors in your application.
      <Code>{errorBoundaryExample}</Code>
      <Button onClick={() => navigate("/lol")}>Trigger an Error Boundary</Button>
    </Layout>
  );
}
