import Layout from "~/components/layout";
import List from "~/components/list";
import { Github, Gitlab, Instagram, Linkedin, Twitter } from "lucide-react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  {
    title: "About Me",
  },
];

export default function Me() {
  return (
    <Layout title="About Me" description="@sm-sami" hideCenterButton>
      <List
        items={[
          "I am a full-stack web developer, but more inclined towards the frontend",
          "My current techstack includes  Remix, TailwindCSS, TypeScript",
          "Currently interning as SDE at mable.ai",
        ]}
      />
      <div className="flex gap-2 items-center">
        <a href="https://github.com/sa-sami"><Github width={20} /></a>
        <a href="https://www.linkedin.com/in/sm-sami/"><Linkedin width={20} /></a>
        <a href="https://www.instagram.com/sm_sami.ts/"><Instagram width={20} /></a>
        <a href="https://twitter.com/siamasdev"><Twitter /></a>
        <a href="https://gitlab.com/sm-sami"><Gitlab width={20} /></a>
        <a href="https://github.com/mhmdsami"><Github width={20} /></a>
      </div>
    </Layout>
  );
}
