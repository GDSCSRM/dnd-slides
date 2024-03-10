import NavigationButtons from "./navigation-buttons";
import { Link, useNavigate } from "@remix-run/react";
import { type ReactNode } from "react";

interface LayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  hideButtons?: boolean;
}

export default function Layout({
  title,
  description,
  children,
  hideButtons = false,
}: LayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen justify-between gap-5 p-16">
      <main className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          {description && (
            <p className="text-xl text-gray-400">{description}</p>
          )}
        </div>
        <div className="flex flex-col gap-5">{children}</div>
      </main>
      <footer className="flex justify-between items-center">
        <Link to="/">
          <img src="/gdsc.png" className="w-12" />
        </Link>
        {!hideButtons && <NavigationButtons />}
        <img src="/remix.svg" className="w-12" />
      </footer>
    </div>
  );
}
