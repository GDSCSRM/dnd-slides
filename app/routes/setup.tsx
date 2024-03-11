import Layout from "~/components/layout";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  {
    title: "Design & Develop | Setup",
  },
];

export default function Setup() {
  return (
    <Layout title="Setup">
      <p>
        Follow the{" "}
        <a
          href="https://git.new/dnd-blog"
          className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
        >
          README
        </a>{" "}
        to setup a remix app with the starter code
      </p>
      <img src="https://api.dub.co/qr?url=https://git.new/dnd-blog" alt="Repo QR" className="w-44 bg-white p-5 rounded-md" />
    </Layout>
  );
}
