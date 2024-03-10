import Button from "~/components/button";
import { Link, useNavigate } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Design & Develop" },
    { name: "description", content: "Learn Remix at Design & Develop" },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="flex flex-col flex-grow items-center justify-center">
        <h1 className="text-3xl font-bold">Design & Develop</h1>
        <p className="text-lg mb-5">
          Learn{" "}
          <a
            href="https://remix.run"
            className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            Remix
          </a>{" "}
          with{" "}
          <Link
            to="/content"
            className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            examples
          </Link>
        </p>
        <Button onClick={() => navigate("/me")}>Start</Button>
      </main>
      <footer className="w-full p-5 text-center bg-secondary float-end">
        <p>
          Built by{" "}
          <a
            href="https://github.com/sm-sami"
            className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            Sami
          </a>{" "}
          for{" "}
          <a
            href="https://github.com/GDSCSRM/"
            className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            GDSCSRM
          </a>
        </p>
      </footer>
    </div>
  );
}
