import Layout from "~/components/layout";
import Code from "~/components/code";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Design & Develop | Remix" }];

export default function ContentRemix() {
  const createNewRemixProject = `npx create-remix@latest`;
  const createNewRemixProjectWithTemplate = `npx create-remix@latest --template <username>/<repo>`;

  return (
    <Layout title="Remix" description="Full-stack web framework which builds on web standards">
      <ul className="list-disc list-inside">
        <li>It is built on top of react-router</li>
        <li>Uses file-system based routing</li>
        <li>Simplifies state management via mechanisms like loaders, actions, and forms</li>
      </ul>
      <h1 className="text-lg font-semibold">Creating a new remix project</h1> 
      <Code language="shell">{createNewRemixProject}</Code>
      <h1 className="text-lg font-semibold">Creating a new remix project with an existing template</h1>
      <Code language="shell">{createNewRemixProjectWithTemplate}</Code>
    </Layout>
  );
}
