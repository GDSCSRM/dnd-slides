import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
  message: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.id;

  return json({ message: `The id is ${id}` });
};

export default function ExampleRoutingDynamic() {
  const { message } = useLoaderData<LoaderData>();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-2">
        <p>
          Text from <kbd>/example/routing/:id</kbd>
        </p>
        <p>File: example.routing.$id.tsx</p>
      </div>
      <p>{message}</p>
    </div>
  );
}
