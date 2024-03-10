import { content } from "~/components/navigation-buttons";
import { Link, type MetaFunction } from "@remix-run/react";
import Layout from "~/components/layout";

export const meta: MetaFunction = () => [
  {
    title: "Design & Develop | Contents",
  },
];

export default function Content() {
  return (
    <Layout title="Contents" hideCenterButton>
      <ul className="text-xl">
        {content.map(({ title, link }) => (
          <li key={link}>
            <Link
              to={link}
              className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
