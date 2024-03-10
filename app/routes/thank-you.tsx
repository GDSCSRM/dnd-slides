import { MetaFunction } from "@remix-run/react";
import NavigationButtons from "~/components/navigation-buttons";

export const meta: MetaFunction = () => [
  {
    title: "Thank You",
  },
];

export default function ThankYou() {
  return (
    <div className="flex flex-col justify-between h-screen p-16">
      <main className="flex flex-col justify-center items-center flex-grow gap-4">
        <h1 className="text-7xl font-bold">Thank You</h1>
        <p>Happy learning ahead!</p>
      </main>
      <footer className="flex self-center">
        <NavigationButtons hideCenterButton />
      </footer>
    </div>
  );
}
