import { useEffect } from "react";
import hljs from "highlight.js";

interface CodeProps {
  children: string;
  language?: string;
}

export default function Code({ children, language }: CodeProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language || "typescript"} rounded-lg`}>{children}</code>
    </pre>
  )
}
