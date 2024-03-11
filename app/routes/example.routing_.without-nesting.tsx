import { useNavigate } from "@remix-run/react";
import Button from "~/components/button";

export default function ExampleRoutingWithoutNesting() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <p>
          Text from <kbd>/example/routing/without-nesting</kbd>
        </p>
        <p>File: example.routing_.without-nesting.tsx</p>
      </div>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
