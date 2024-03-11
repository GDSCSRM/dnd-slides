import Layout from "~/components/layout";
import type { MetaFunction } from "@remix-run/react";
import List from "~/components/list";

export const meta: MetaFunction = () => [
  { title: "Design & Develop | File Structure" },
];

export default function ContentFileStructure() {
  return (
    <Layout title="File Structure">
      <List
        items={[
          <span>
            <kbd>app/</kbd> Contains the application logic
          </span>,
          <span>
            <kbd>routes/</kbd> Every file in this directory correspond to a
            route
          </span>,
          <span>
            <kbd>components/</kbd> It is a convention to place all the
            components used in the application here
          </span>,
          <span>
            <kbd>public/</kbd> Contains the static files like images, fonts, etc
          </span>,
        ]}
      />
      <List
        items={[
          <span>
            <kbd>root.tsx</kbd> The entry point of the application
          </span>,
          <span>
            <kbd>routes/_index.tsx</kbd> The home page of the application
          </span>,
          <span>
            <kbd>*.server.ts</kbd> Excludes the file in the client bundle
          </span>,
          <span>
            <kbd>*.client.ts</kbd> Excludes the file in the server bundle
          </span>,
        ]}
      />
    </Layout>
  );
}
