import { ReactNode } from "react";

interface ListProps {
  items: ReactNode[];
}

export default function List({ items }: ListProps) {
  return (
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
