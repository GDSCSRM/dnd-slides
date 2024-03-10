import Button from "./button";
import { useLocation, useNavigate } from "@remix-run/react";

interface NavigationButtonsProps {
  hideCenterButton?: boolean;
}

export const content = [
  {
    title: "React",
    link: "/content/00-react",
  },
  {
    title: "Meta-frameworks",
    link: "/content/01-meta-frameworks",
  },
  {
    title: "CSR vs SSR",
    link: "/content/02-csr-vs-ssr",
  },
  {
    title: "Rendering & Hydration",
    link: "/content/03-rendering-hydration",
  },
  {
    title: "Remix",
    link: "/content/04-remix",
  },
  {
    title: "File Structure",
    link: "/content/05-file-structure",
  },
  {
    title: "Routing",
    link: "/content/06-routing",
  },
  {
    title: "Meta",
    link: "/content/07-meta",
  },
  {
    title: "Links",
    link: "/content/08-links",
  },
  {
    title: "Loaders",
    link: "/content/09-loaders",
  },
  {
    title: "useLoaderData",
    link: "/content/10-use-loader-data",
  },
  {
    title: "Form",
    link: "/content/11-form",
  },
  {
    title: "Actions",
    link: "/content/12-actions",
  },
  {
    title: "useActionData",
    link: "/content/13-use-action-data",
  },
  {
    title: "Errors",
    link: "/content/14-errors",
  },
];

const pages = [
  {
    title: "Me",
    link: "/me",
  },
  {
    title: "Contents",
    link: "/content",
  },
  ...content,
  {
    title: "End Notes",
    link: "/end-notes",
  },
  {
    title: "Thank You",
    link: "/thank-you",
  }
];

export default function NavigationButtons({ hideCenterButton }: NavigationButtonsProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentPageIndex = pages.findIndex((page) => page.link === pathname);
  const prevPage = pages[currentPageIndex - 1];
  const nextPage = pages[currentPageIndex + 1];

  return (
    <div className="flex gap-2">
      {prevPage && (
        <Button onClick={() => navigate(prevPage.link)}>
          &larr; Previous: {prevPage.title}
        </Button>
      )}
      {!hideCenterButton && <Button onClick={() => navigate("/content")}>Back to Contents</Button>}
      {nextPage && (
        <Button onClick={() => navigate(nextPage.link)}>
          Next: {nextPage.title} &rarr;
        </Button>
      )}
    </div>
  );
}
