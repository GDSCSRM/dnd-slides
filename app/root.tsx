import stylesheet from "~/styles/globals.css";
import codetheme from "highlight.js/styles/github-dark-dimmed.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: codetheme },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <html>
        <head>
          <title>Something went wrong!</title>
          <Meta />
          <Links />
        </head>
        <body className="flex flex-col h-screen items-center justify-center gap-5">
          <h1 className="text-xl">Something went wrong!</h1>
          <h1 className="font-bold text-8xl">{error.status}</h1>
          <pre>{error.data}</pre>
          <button
            onClick={() => navigate(-1)}
            className="bg-secondary px-4 py-1 rounded-md border border-highlight w-fit"
          >
            Go Back
          </button>
        </body>
      </html>
    );
  }

  return (
    <html>
      <head>
        <title>Something went wrong!</title>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-screen items-center justify-center gap-5">
        <h1 className="text-3xl">Something went wrong!</h1>
      </body>
    </html>
  );
}
